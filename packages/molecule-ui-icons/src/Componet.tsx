import * as React from 'react';
import cx from 'classnames';
import { throwPropError } from './helpers';
import '../styles/index.css';


type Props = {
    fill?: string;
    size: 'small' | 'normal' | 'large' | 'huge';
    customSize?: string;
    className?: string;
};

const Componet: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

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

    let customStyles = {};

    if (customSize) {
        customStyles = {
            width: customSize,
            height: customSize,
        };
    }

    if (customSize && window.innerWidth < 600) {
        customStyles = {
            width: +customSize / 2,
            height: +customSize / 2,
        };
    }

    const classes = cx(size, className);
    return (
        <svg
            className={classes}
            style={customStyles}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.22132 12.5116C4.9434 12.229 4.9434 11.7709 5.22132 11.4884L9.40496 7.23511C9.68288 6.95256 9.68288 6.49446 9.40496 6.21191C9.12704 5.92936 8.67644 5.92936 8.39852 6.21191L3.20844 11.4884C2.93052 11.7709 2.93052 12.229 3.20844 12.5116L8.39851 17.7881C8.67644 18.0706 9.12704 18.0706 9.40496 17.7881C9.68288 17.5055 9.68288 17.0474 9.40496 16.7649L5.22132 12.5116ZM18.7787 12.5116C19.0566 12.229 19.0566 11.7709 18.7787 11.4884L14.595 7.23511C14.3171 6.95256 14.3171 6.49446 14.595 6.21191C14.873 5.92936 15.3236 5.92936 15.6015 6.21191L20.7916 11.4884C21.0695 11.7709 21.0695 12.229 20.7916 12.5116L15.6015 17.7881C15.3236 18.0706 14.873 18.0706 14.595 17.7881C14.3171 17.5055 14.3171 17.0474 14.595 16.7649L18.7787 12.5116ZM9.15333 12.7235C9.54637 12.7235 9.86499 12.3996 9.86499 12C9.86499 11.6004 9.54637 11.2765 9.15333 11.2765C8.76029 11.2765 8.44167 11.6004 8.44167 12C8.44167 12.3996 8.76029 12.7235 9.15333 12.7235ZM12.7116 12C12.7116 12.3996 12.393 12.7235 12 12.7235C11.6069 12.7235 11.2883 12.3996 11.2883 12C11.2883 11.6004 11.6069 11.2765 12 11.2765C12.393 11.2765 12.7116 11.6004 12.7116 12ZM14.8466 12.7235C15.2397 12.7235 15.5583 12.3996 15.5583 12C15.5583 11.6004 15.2397 11.2765 14.8466 11.2765C14.4536 11.2765 14.135 11.6004 14.135 12C14.135 12.3996 14.4536 12.7235 14.8466 12.7235Z" fill={fill} />
        </svg>
    );
};

export default Componet;