"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const helpers_1 = require("./helpers");
require("@molecule-ui/styles/build/icons.css");
const AddUserSolid = ({ fill, size = 'normal', customSize, className }) => {
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
        React.createElement("path", { fill: fill, fillRule: "evenodd", d: "M11 12.917a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-3.176-.114c.181-.123.419-.088.59.048A4.15 4.15 0 0011 13.75c.977 0 1.875-.336 2.586-.9.171-.135.409-.17.59-.046A4.162 4.162 0 0116 16.25c0 .46-.373.833-.833.833H6.833A.833.833 0 016 16.25c0-1.433.723-2.697 1.824-3.447zm8.234-4.886a.5.5 0 01.5.5v1h.942a.5.5 0 010 1h-.942v1a.5.5 0 11-1 0v-1H14.5a.5.5 0 010-1h1.058v-1a.5.5 0 01.5-.5z", clipRule: "evenodd" })));
};
exports.default = AddUserSolid;
