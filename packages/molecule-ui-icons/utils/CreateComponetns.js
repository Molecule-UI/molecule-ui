const fs = require('fs');
const path = require('path');
const glob = require('glob');
const reactTemplate = require('./template');
const pathsObj = {};

// Template for creating a React Component

// Export string to add in Index.tsx
const exportString = `export {default as %FILENAME%} from './%FILENAME%';`;

// Create Component and File Name
const nameConvention = (name) => {
    const splitName = name.split('-');
    const capNames = splitName.map((el) => {
        return el.charAt(0).toUpperCase() + el.slice(1);
    });
    return capNames.join('');
};

// Generate paths object with path for each svg file
const paths = glob.sync('../svg/*.svg').forEach((filePath) => {
    const name = path.basename(filePath, '.svg');
    const FileName = nameConvention(name);
    pathsObj[FileName] = filePath;
});

// Function to iterate through each path in the paths object and create ReactComponent in TSX
(async (pathsObj) => {
    for (const fileName in pathsObj) {
        // Get the path of individual file
        const filePath = path.resolve(__dirname, pathsObj[fileName]);

        // Get the data of that file
        const fileData = fs.readFileSync(filePath, { encoding: 'utf-8' });

        // Extract the <Path /> tag from svg
        const svgPath = fileData
            .match(/<path[^>]+?>/g)
            .toString()
            .replace(/(fill=.\w*['"]|fill=['"]#\w*['"])/g, 'fill={fill} ')
            .replace(/fill-rule/g, 'fillRule')
            .replace(/clip-rule/g, 'clipRule');

        // Replace the necessary Placeholders in the ReactComponent Template
        const componentData = reactTemplate
            .replace('%PATH%', svgPath)
            .replace(/%FILENAME%/g, fileName);

        // Create a new Component
        await fs.writeFileSync(`../src/${fileName}.tsx`, componentData, {
            encoding: 'utf-8',
        });

        // Replace the necessary placeholders from export string
        const exportData = exportString.replace(/%FILENAME%/g, fileName);
        // Add Component export to INDEX.tsx
        await fs.appendFileSync('../src/index.tsx', exportData, { encoding: 'utf-8' });
    }
})(pathsObj);
