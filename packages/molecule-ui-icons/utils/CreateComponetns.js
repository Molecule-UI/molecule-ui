const fs = require('fs');
const path = require('path');
const glob = require('glob');
const pathsObj = {};

const nameConvention = (name) => {
    const splitName = name.split('-');
    const capNames = splitName.map((el) => {
        return el.charAt(0).toUpperCase() + el.slice(1);
    });
    return capNames.join('');
};

const paths = glob.sync('./svg/*.svg').forEach((filePath) => {
    const name = path.basename(filePath, '.svg');
    const FileName = nameConvention(name);
    pathsObj[FileName] = filePath;
});

(async (pathsObj) => {
    for (const fileName in pathsObj) {
        const filePath = path.resolve(__dirname, pathsObj[fileName]);
        const fileData = fs.readFileSync(filePath, { encoding: 'utf-8' });
        const data = `import * as React from 'react';

    type Props = {
        fill: string;
    };

    const Phone: React.FC<Props> = ({ fill }) => {
        return (
        %component%
        );
    };

    export default Phone;
    `;

        const componentData = data
            .replace('%component%', fileData)
            .replace(/(fill=.\w*['"]|fill=['"]#\w*['"])/g, 'fill={fill} ')
            .replace(/Phone/g, fileName);
        await fs.writeFileSync(`./src/${fileName}.tsx`, componentData, {
            encoding: 'utf-8',
        });
    }
})(pathsObj);
