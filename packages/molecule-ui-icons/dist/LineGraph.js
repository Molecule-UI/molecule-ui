"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const helpers_1 = require("./helpers");
require("@molecule-ui/styles/build/icons.css");
const LineGraph = ({ fill, size = 'normal', customSize, className }) => {
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
        React.createElement("path", { fill: fill, fillRule: "evenodd", d: "M4.5 4a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h15a.5.5 0 000-1h-14a.5.5 0 01-.5-.5v-14a.5.5 0 00-.5-.5zm14.707 4.545a.5.5 0 01.248.662l-2.292 5.044a1 1 0 11-1.316-.008l-.921-2.147-2.052 3.418a1 1 0 11-1.84.226l-.775-.774a1 1 0 01-.518 0l-2.387 2.388a.5.5 0 01-.708-.708l2.388-2.387a1.001 1.001 0 111.932 0l.775.775A1 1 0 0112 15h.017l2.48-4.135a1 1 0 11.992.007l1.024 2.39 2.032-4.469a.5.5 0 01.662-.248z", clipRule: "evenodd" })));
};
exports.default = LineGraph;
