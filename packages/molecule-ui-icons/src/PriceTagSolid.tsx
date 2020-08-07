import * as React from 'react';
import cx from 'classnames';
import { throwPropError } from './helpers';
import '@molecule-ui/styles/build/icons.css';

type Props = {
    fill?: string;
    size: 'small' | 'normal' | 'large' | 'huge';
    customSize?: string;
    className?: string;
};

const PriceTagSolid: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

    const sizeValues = ['small', 'normal', 'large', 'huge'];

    if (size && typeof size !== 'string') {
        throwPropError(
            'Value of props.size must be a string.'
        );
    }
    
    if (!size) throwPropError("Value of props.size can't be an empty string ");

    if (size) {
        if (sizeValues.indexOf(size) === -1)
            throwPropError(
                'Value of props.size must be any one of  "huge"  "large"  "normal"  "small". '
            );
    }

    if (fill && typeof fill !== 'string') {
        throwPropError('Value of props.fill must be a string');
    }

    if (fill && typeof fill === 'string') {
        if (!fill.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
            throwPropError('Value of props.fill must be a valid "HEXCODE".');
        }
    }

    if (customSize && typeof customSize !== 'string') {
        throwPropError('Value of props.customSize must be a string');
    }

    if (className && typeof className !== 'string') {
        throwPropError('Value of props.className must be a string');
    }


    const classes = cx(size, className);
    return (
        <svg
            className={classes}
            style={{ width: customSize, height: customSize }}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <path fill={fill}  fillRule="evenodd" d="M8 8.414a1 1 0 01.293-.707l3-3a1 1 0 011.414 0l3 3a1 1 0 01.293.707V19a1 1 0 01-1 1H9a1 1 0 01-1-1V8.414zM11 7a1 1 0 112 0 1 1 0 01-2 0zm1.926 8.281c.186.155.28.345.28.571a.74.74 0 01-.323.634c-.215.154-.51.232-.885.232-.384 0-.68-.092-.89-.276-.209-.185-.313-.447-.313-.789H10c0 .487.15.872.451 1.157.304.283.722.445 1.255.486V18h.636v-.704c.524-.046.93-.196 1.22-.45.292-.252.438-.586.438-1.001 0-.26-.059-.488-.176-.682a1.476 1.476 0 00-.541-.508c-.244-.148-.585-.281-1.023-.402-.435-.123-.75-.258-.941-.405a.727.727 0 01-.284-.6c0-.27.09-.48.271-.63.18-.153.441-.23.782-.23.327 0 .586.103.778.307.192.204.288.479.288.825h.79c0-.503-.135-.9-.404-1.19-.266-.29-.64-.463-1.121-.52V11h-.64v.807c-.479.049-.855.202-1.13.46-.272.258-.408.589-.408.991 0 .396.139.723.416.98.281.256.726.463 1.337.623.438.125.749.265.932.42z" clipRule="evenodd"/>
        </svg>
    );
};

export default PriceTagSolid;