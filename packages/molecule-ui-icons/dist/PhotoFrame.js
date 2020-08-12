"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const helpers_1 = require("./helpers");
require("@molecule-ui/styles/build/icons.css");
const PhotoFrame = ({ fill, size = 'normal', customSize, className }) => {
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
        React.createElement("path", { fill: fill, fillRule: "evenodd", d: "M4.5 9a.5.5 0 00.5-.5V5h3.5a.5.5 0 000-1H5a1 1 0 00-1 1v3.5a.5.5 0 00.5.5zM19 5h-3.5a.5.5 0 010-1H19a1 1 0 011 1v3.5a.5.5 0 01-1 0V5zM4 15.5a.5.5 0 011 0V19h3.5a.5.5 0 010 1H5a1 1 0 01-1-1v-3.5zm15 0a.5.5 0 011 0V19a1 1 0 01-1 1h-3.5a.5.5 0 010-1H19v-3.5zm-8.454.818L9 14l-2 3h11l-4-5-3.454 4.318zM9 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z", clipRule: "evenodd" })));
};
exports.default = PhotoFrame;
