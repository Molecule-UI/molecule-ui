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

const Delete: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M9.5 4.73v.54H5.366a.5.5 0 000 1h.657l.909 12.112a1.5 1.5 0 001.496 1.388h7.146a1.5 1.5 0 001.495-1.386L18 6.27h.635a.5.5 0 000-1H14.5v-.54a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5zm4.5 0h-4v.54h4v-.54zm2.996 1.54h-9.97l.903 12.037a.5.5 0 00.499.463h7.146a.5.5 0 00.498-.462l.924-12.038zm-7.95 1a.498.498 0 00-.497.543l.91 10.004a.498.498 0 00.992-.09L9.54 7.723a.498.498 0 00-.496-.453zm5.909 0a.498.498 0 00-.496.453l-.91 10.004a.498.498 0 10.992.09l.91-10.004a.498.498 0 00-.496-.543zM12 7.26a.5.5 0 00-.5.5v10.028a.5.5 0 001 0V7.761a.5.5 0 00-.5-.5z" clipRule="evenodd"/>
        </svg>
    );
};

export default Delete;