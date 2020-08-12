"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const helpers_1 = require("./helpers");
require("@molecule-ui/styles/build/icons.css");
const ChatSquareError = ({ fill, size = 'normal', customSize, className }) => {
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
        React.createElement("path", { fill: fill, fillRule: "evenodd", d: "M4.5 17a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h15a.5.5 0 01.5.5v10a.5.5 0 01-.5.5H7l-.621 1.242c-.094.189-.379.122-.379-.09V17H4.5zM19 16V7H5v9h14zm-6.915-7.463a.5.5 0 01.5.5v3.658a.5.5 0 01-.5.5h-.17a.5.5 0 01-.5-.5V9.037a.5.5 0 01.5-.5h.17zm.5 5.694c0 .286-.262.517-.585.517-.323 0-.585-.231-.585-.517 0-.286.262-.518.585-.518.323 0 .585.232.585.518z", clipRule: "evenodd" })));
};
exports.default = ChatSquareError;
