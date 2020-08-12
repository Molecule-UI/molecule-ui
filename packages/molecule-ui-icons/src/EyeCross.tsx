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

const EyeCross: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M18.68 5.921a.439.439 0 10-.62-.62l-2.965 2.973a9.001 9.001 0 00-9.459 2.09l-.929.929a1 1 0 000 1.414l.929.929a8.99 8.99 0 002.4 1.719l-2.717 2.724a.439.439 0 10.622.62l2.964-2.974a9.001 9.001 0 009.459-2.089l.929-.929a1 1 0 000-1.414l-.93-.93a8.99 8.99 0 00-2.398-1.718l2.716-2.724zm-4.374 3.145a7.999 7.999 0 00-7.963 2.005L5.414 12l.93.929A7.977 7.977 0 008.786 14.6l1.524-1.529a2 2 0 012.756-2.764l1.239-1.242zm-.617 1.862l1.524-1.529a7.979 7.979 0 012.444 1.672l.929.929-.93.929a7.999 7.999 0 01-7.962 2.005l1.239-1.242a2 2 0 002.756-2.764z" clipRule="evenodd"/>
        </svg>
    );
};

export default EyeCross;