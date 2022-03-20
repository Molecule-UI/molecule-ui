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

const Heart: React.FC<Props> = ({ fill, size = 'normal', customSize, className, onClick }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M10.524 6.849c-1.037-1.132-2.64-1.132-3.677 0L5.372 5.498c1.637-1.786 4.183-1.975 6.012-.566.216.166.421.355.614.566l.02.021c.187-.202.386-.383.594-.544 1.83-1.413 4.378-1.225 6.016.562L17.153 6.89c-1.034-1.13-2.63-1.132-3.667-.011l-1.475 1.594-1.487-1.623zm8.104 5.92c1.83-1.997 1.83-5.235 0-7.232L17.153 6.89c1.13 1.232 1.13 3.296 0 4.529l-5.148 5.617-5.135-5.632-.023-.025c-1.13-1.232-1.13-3.297 0-4.53l-1.475-1.35c-1.83 1.997-1.83 5.234 0 7.231l.02.022L12.002 20l6.626-7.231z" clipRule="evenodd"/>
        </svg>
    );
};

export default Heart;