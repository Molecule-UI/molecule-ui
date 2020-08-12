"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const helpers_1 = require("./helpers");
require("@molecule-ui/styles/build/icons.css");
const DeleteSolid = ({ fill, size = 'normal', customSize, className }) => {
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
        React.createElement("path", { fill: fill, fillRule: "evenodd", d: "M9.5 4.919a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v.662h4.134a.5.5 0 110 1H17.5l-.929 12.077a1 1 0 01-.997.923H8.426a1 1 0 01-.997-.923L6.5 6.581H5.366a.5.5 0 110-1H9.5V4.92zm.5 0h4v.662h-4V4.92zM9.045 7.58a.498.498 0 00-.496.543l.91 10.004a.498.498 0 00.992-.09L9.54 8.034a.498.498 0 00-.496-.453zm2.455.5a.5.5 0 011 0v10a.5.5 0 01-1 0v-10zm3.455-.5a.498.498 0 00-.496.453l-.91 10.004a.498.498 0 10.992.09l.91-10.004a.498.498 0 00-.496-.543z", clipRule: "evenodd" })));
};
exports.default = DeleteSolid;
