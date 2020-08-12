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

const Settings: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M11.5 4a1 1 0 00-1 1v.964c0 .891-1.077 1.338-1.707.708L8.11 5.99a1 1 0 00-1.414 0l-.707.707a1 1 0 000 1.414l.682.682c.63.63.183 1.707-.708 1.707H5a1 1 0 00-1 1v1a1 1 0 001 1h.964c.891 0 1.338 1.077.708 1.707l-.682.682a1 1 0 000 1.414l.707.707a1 1 0 001.414 0l.682-.682c.63-.63 1.707-.183 1.707.707V19a1 1 0 001 1h1a1 1 0 001-1v-.965c0-.89 1.077-1.337 1.707-.707l.682.682a1 1 0 001.414 0l.707-.707a1 1 0 000-1.414l-.682-.682c-.63-.63-.183-1.707.707-1.707H19a1 1 0 001-1v-1a1 1 0 00-1-1h-.965c-.89 0-1.337-1.077-.707-1.707l.682-.682a1 1 0 000-1.414l-.707-.707a1 1 0 00-1.414 0l-.682.682c-.63.63-1.707.183-1.707-.708V5a1 1 0 00-1-1h-1zm4.5 8a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
        </svg>
    );
};

export default Settings;