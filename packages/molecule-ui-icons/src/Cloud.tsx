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

const Cloud: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M7.146 12.063a2.847 2.847 0 00-.48-.04C5.195 12.022 4 13.147 4 14.535c0 1.217.916 2.231 2.133 2.464h11.734C19.084 16.767 20 15.753 20 14.536c0-1.23-.939-2.255-2.178-2.471.03-.178.045-.36.045-.545 0-1.944-1.672-3.52-3.734-3.52-1.54 0-2.863.88-3.434 2.136a2.813 2.813 0 00-.832-.125c-1.282 0-2.353.853-2.609 1.99a2.391 2.391 0 00-.016.08 2.947 2.947 0 00-.096-.018zM17.762 16c.749-.18 1.238-.8 1.238-1.464 0-.695-.538-1.345-1.35-1.486l-.976-.17.162-.978c.02-.124.03-.252.03-.382 0-1.337-1.167-2.52-2.733-2.52-1.16 0-2.12.661-2.523 1.55l-.364.802-.842-.26a1.815 1.815 0 00-.537-.08c-.865 0-1.516.582-1.643 1.255l-.189 1-.996-.207a1.831 1.831 0 00-.372-.038c-.977 0-1.667.733-1.667 1.514C5 15.2 5.49 15.82 6.239 16h11.523z" clipRule="evenodd"/>
        </svg>
    );
};

export default Cloud;