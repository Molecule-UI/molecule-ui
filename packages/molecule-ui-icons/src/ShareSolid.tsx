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

const ShareSolid: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M8.462 6.75c0 .167-.024.328-.067.481l8.248 4.17a1.733 1.733 0 011.626-1.151A1.74 1.74 0 0120 12a1.74 1.74 0 01-1.73 1.75c-.748 0-1.385-.48-1.627-1.15l-8.248 4.169c.043.153.067.314.067.481A1.74 1.74 0 016.73 19 1.74 1.74 0 015 17.25c0-.966.775-1.75 1.73-1.75a1.72 1.72 0 011.416.743L16.538 12 8.146 7.757a1.72 1.72 0 01-1.415.743A1.74 1.74 0 015 6.75C5 5.784 5.775 5 6.73 5c.957 0 1.732.784 1.732 1.75z" clipRule="evenodd"/>
        </svg>
    );
};

export default ShareSolid;