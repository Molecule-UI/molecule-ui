"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const helpers_1 = require("./helpers");
require("@molecule-ui/styles/build/icons.css");
const ChatSquareSolid = ({ fill, size = 'normal', customSize, className }) => {
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
        React.createElement("path", { fill: fill, fillRule: "evenodd", d: "M4.5 6a.5.5 0 00-.5.5v10a.5.5 0 00.5.5H6v1.153c0 .21.285.278.379.09L7 17h12.5a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-15zm2 3a.5.5 0 010-1h11a.5.5 0 010 1h-11zM6 10.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm.5 3.5a.5.5 0 000 1h6a.5.5 0 000-1h-6zM6 12.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z", clipRule: "evenodd" })));
};
exports.default = ChatSquareSolid;
