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

const AddUserSolid: React.FC<Props> = ({ fill, size = 'normal', customSize, className, onClick }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M11 12.917a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-3.176-.114c.181-.123.419-.088.59.048A4.15 4.15 0 0011 13.75c.977 0 1.875-.336 2.586-.9.171-.135.409-.17.59-.046A4.162 4.162 0 0116 16.25c0 .46-.373.833-.833.833H6.833A.833.833 0 016 16.25c0-1.433.723-2.697 1.824-3.447zm8.234-4.886a.5.5 0 01.5.5v1h.942a.5.5 0 010 1h-.942v1a.5.5 0 11-1 0v-1H14.5a.5.5 0 010-1h1.058v-1a.5.5 0 01.5-.5z" clipRule="evenodd"/>
        </svg>
    );
};

export default AddUserSolid;