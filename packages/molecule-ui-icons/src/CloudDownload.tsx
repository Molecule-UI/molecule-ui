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

const CloudDownload: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M11.655 8.843C12.14 7.77 13.283 7 14.633 7c1.814 0 3.234 1.38 3.234 3.02 0 .158-.013.312-.038.463l-.08.489.487.085c1.026.18 1.764 1.016 1.764 1.98 0 .937-.7 1.755-1.683 1.963H17a.5.5 0 000 1h1.414l.047-.009C19.888 15.718 21 14.517 21 13.036c0-1.338-.908-2.447-2.137-2.85.003-.056.004-.11.004-.166 0-2.248-1.924-4.02-4.234-4.02-1.578 0-2.968.823-3.697 2.06a3.338 3.338 0 00-.57-.049c-1.365 0-2.553.83-2.99 2.018a3.407 3.407 0 00-.21-.007C5.447 10.022 4 11.344 4 13.036c0 1.481 1.112 2.682 2.54 2.955l.046.009H9a.5.5 0 000-1H6.683C5.7 14.792 5 13.974 5 13.036c0-1.085.942-2.014 2.167-2.014.163 0 .321.017.473.048l.498.104.095-.5c.175-.925 1.046-1.663 2.134-1.663.24 0 .47.036.684.103l.422.13.182-.401zM13 11c.331 0 .6.248.6.555v5.32l1.376-1.272a.635.635 0 01.848 0 .526.526 0 010 .784l-2.4 2.22L13 19l-.424-.392-2.4-2.22a.526.526 0 010-.785.635.635 0 01.848 0l1.376 1.272v-5.32c0-.306.269-.555.6-.555z" clipRule="evenodd"/>
        </svg>
    );
};

export default CloudDownload;