"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const helpers_1 = require("./helpers");
require("@molecule-ui/styles/build/icons.css");
const EuroFill = ({ fill, size = 'normal', customSize, className }) => {
    const sizeValues = ['small', 'normal', 'large', 'huge'];
    if (size && typeof size !== 'string') {
        helpers_1.throwPropError('Value of props.size must be a string.');
    }
    if (!size)
        helpers_1.throwPropError("Value of props.size can't be an empty string ");
    if (size) {
        if (sizeValues.indexOf(size) === -1)
            helpers_1.throwPropError('Value of props.size must be any one of  "huge"  "large"  "normal"  "small". ');
    }
    if (fill && typeof fill !== 'string') {
        helpers_1.throwPropError('Value of props.fill must be a string');
    }
    if (fill && typeof fill === 'string') {
        if (!fill.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
            helpers_1.throwPropError('Value of props.fill must be a valid "HEXCODE".');
        }
    }
    if (customSize && typeof customSize !== 'string') {
        helpers_1.throwPropError('Value of props.customSize must be a string');
    }
    if (className && typeof className !== 'string') {
        helpers_1.throwPropError('Value of props.className must be a string');
    }
    const classes = classnames_1.default(size, className);
    return (React.createElement("svg", { className: classes, style: { width: customSize, height: customSize }, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        React.createElement("path", { fill: fill, fillRule: "evenodd", d: "M12 20a8 8 0 100-16 8 8 0 000 16zm2.085-4.252c.514-.505.819-1.221.915-2.148h-1.033c-.1.722-.303 1.23-.61 1.522-.303.29-.74.434-1.311.434-.636 0-1.13-.281-1.483-.843A3.022 3.022 0 0110.24 14H12v-1h-1.945a6.797 6.797 0 01-.022-.555V12H12v-1h-1.943c.061-.722.239-1.299.533-1.731.374-.546.89-.818 1.546-.818.536 0 .951.156 1.248.469.3.313.494.818.583 1.516H15c-.082-.919-.373-1.637-.872-2.154-.5-.521-1.164-.782-1.992-.782-.624 0-1.173.166-1.648.5-.475.328-.842.801-1.103 1.42-.195.47-.316.996-.363 1.58H8v1h1v.41c0 .203.007.4.022.59H8v1h1.184c.138.532.353.995.646 1.387.556.742 1.295 1.113 2.216 1.113.849 0 1.529-.25 2.039-.752z", clipRule: "evenodd" })));
};
exports.default = EuroFill;
