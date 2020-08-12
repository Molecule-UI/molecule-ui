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

const DollarOutline: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M12 20a8 8 0 100-16 8 8 0 000 16zm0-1a7 7 0 100-14 7 7 0 000 14zm1.808-5.068c0-.323-.14-.595-.42-.816-.274-.221-.74-.421-1.398-.6-.915-.228-1.583-.525-2.004-.89a1.787 1.787 0 01-.625-1.4c0-.575.204-1.047.612-1.415.41-.367.97-.586 1.682-.657V6.997h1V8.16c.71.084 1.26.33 1.655.739.404.414.606.98.606 1.7H13.73c0-.495-.144-.888-.431-1.179-.288-.291-.677-.437-1.167-.437-.511 0-.902.109-1.173.327-.27.214-.406.514-.406.9 0 .357.142.643.425.857.288.21.759.404 1.412.58.657.171 1.168.363 1.534.573.37.207.64.45.812.726.176.278.264.602.264.974 0 .593-.22 1.07-.657 1.432-.434.361-1.044.575-1.83.642V17h-.954v-1.005c-.8-.06-1.427-.291-1.882-.695-.451-.407-.677-.958-.677-1.653h1.192c0 .488.157.864.47 1.127.314.263.76.394 1.335.394.563 0 1.005-.11 1.327-.331a1.04 1.04 0 00.484-.905z" clipRule="evenodd"/>
        </svg>
    );
};

export default DollarOutline;