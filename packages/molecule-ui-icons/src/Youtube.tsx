import * as React from 'react';
import cx from 'classnames';
import { throwPropError } from './helpers';
import Styles from './Style/Styles'

type Props = {
    fill?: string;
    size?: 'small' | 'normal' | 'large' | 'huge';
    customSize?: string;
    className?: string;
    onClick?: () => void;
};

const Youtube: React.FC<Props> = ({ fill, size = 'normal', customSize, className, onClick }) => {

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

    const onClickHandle = () => {
        onClick && onClick()
    }

    const componentStyles = Styles()

    const classes = cx(componentStyles[size], className);
    return (
        <svg
            onClick={onClickHandle}
            className={classes}
            style={customStyles}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <path d="M10.6 14.1429L14.233 12L10.6 9.85714V14.1429ZM18.692 8.55C18.783 8.88571 18.846 9.33571 18.888 9.90714C18.937 10.4786 18.958 10.9714 18.958 11.4L19 12C19 13.5643 18.888 14.7143 18.692 15.45C18.517 16.0929 18.111 16.5071 17.481 16.6857C17.152 16.7786 16.55 16.8429 15.626 16.8857C14.716 16.9357 13.883 16.9571 13.113 16.9571L12 17C9.067 17 7.24 16.8857 6.519 16.6857C5.889 16.5071 5.483 16.0929 5.308 15.45C5.217 15.1143 5.154 14.6643 5.112 14.0929C5.063 13.5214 5.042 13.0286 5.042 12.6L5 12C5 10.4357 5.112 9.28571 5.308 8.55C5.483 7.90714 5.889 7.49286 6.519 7.31429C6.848 7.22143 7.45 7.15714 8.374 7.11429C9.284 7.06429 10.117 7.04286 10.887 7.04286L12 7C14.933 7 16.76 7.11429 17.481 7.31429C18.111 7.49286 18.517 7.90714 18.692 8.55Z" fill={fill} />
        </svg>
    );
};

export default Youtube;