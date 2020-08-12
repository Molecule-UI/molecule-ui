"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const helpers_1 = require("./helpers");
require("@molecule-ui/styles/build/icons.css");
const UserSolid = ({ fill, size = 'normal', customSize, className }) => {
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
        React.createElement("path", { fill: fill, fillRule: "evenodd", d: "M14.5 10.417a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM9.414 12.85c-.171-.136-.409-.17-.59-.048A4.162 4.162 0 007 16.25c0 .46.373.833.833.833h8.334c.46 0 .833-.373.833-.833a4.162 4.162 0 00-1.824-3.447c-.181-.123-.419-.088-.59.048A4.15 4.15 0 0112 13.75a4.15 4.15 0 01-2.586-.9z", clipRule: "evenodd" })));
};
exports.default = UserSolid;
