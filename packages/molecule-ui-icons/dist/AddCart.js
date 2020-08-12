"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const helpers_1 = require("./helpers");
require("@molecule-ui/styles/src/icon-styles/icons.scss");
const AddCart = ({ fill, size = 'normal', customSize, className }) => {
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
    const classes = classnames_1.default(size, className, 'color');
    return (React.createElement("svg", { className: classes, style: { width: customSize, height: customSize }, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        React.createElement("path", { fill: fill, fillRule: 'evenodd', d: 'M19.592 5.509a.5.5 0 01.4.583l-1.195 6.369A2.5 2.5 0 0116.34 14.5h-8l-.326.814a.5.5 0 00.464.686H16.5a.5.5 0 010 1H8.477a1.5 1.5 0 01-1.393-2.057l.398-.994L6.085 6.5H4.5a.5.5 0 010-1h2.415l1.5 8h7.925a1.5 1.5 0 001.474-1.224l1.195-6.368a.5.5 0 01.583-.4zM9 17a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2zM13.002 7a.5.5 0 01.5.5V9h1.5a.5.5 0 110 1h-1.5v1.5a.5.5 0 11-1 0V10h-1.5a.5.5 0 010-1h1.5V7.5a.5.5 0 01.5-.5z', clipRule: 'evenodd' })));
};
exports.default = AddCart;
