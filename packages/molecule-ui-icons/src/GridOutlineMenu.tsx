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

const GridOutlineMenu: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

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
            style={customSize ? { width: customSize, height: customSize }: {}}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <path fill={fill}  fillRule="evenodd" d="M7 5H5v2h2V5zM5 4H4v4h4V4H5zm2 13H5v2h2v-2zm-2-1H4v4h4v-4H5zm0-5h2v2H5v-2zm-1-1h4v4H4v-4zm9-5h-2v2h2V5zm-2-1h-1v4h4V4h-3zm0 13h2v2h-2v-2zm-1-1h4v4h-4v-4zm3-5h-2v2h2v-2zm-2-1h-1v4h4v-4h-3zm6-5h2v2h-2V5zm-1-1h4v4h-4V4zm3 13h-2v2h2v-2zm-2-1h-1v4h4v-4h-3zm0-5h2v2h-2v-2zm-1-1h4v4h-4v-4z" clipRule="evenodd"/>
        </svg>
    );
};

export default GridOutlineMenu;