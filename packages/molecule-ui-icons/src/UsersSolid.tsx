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

const UsersSolid: React.FC<Props> = ({ fill, size = 'normal', customSize, className, onClick }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M8.052 11.379c-.426.332-.965.53-1.552.53-1.38 0-2.5-1.099-2.5-2.454C4 8.099 5.12 7 6.5 7S9 8.099 9 9.455c0 .661-.267 1.262-.7 1.703-.085.07-.168.144-.248.22zM7 15.333c0 .262.121.496.31.649A1 1 0 016.5 15c0-.833.204-1.619.564-2.31a4.198 4.198 0 01-3.15-.846c-.171-.133-.409-.167-.59-.046A4.067 4.067 0 001.5 15.182c0 .452.373.818.833.818h5a.83.83 0 00.5.167h8.334a.83.83 0 00.5-.167h5c.46 0 .833-.366.833-.818a4.067 4.067 0 00-1.824-3.384c-.181-.12-.419-.087-.59.046a4.197 4.197 0 01-3.15.846c.36.691.564 1.477.564 2.31a1 1 0 01-.81.982.832.832 0 00.31-.649 4.162 4.162 0 00-1.824-3.446c-.181-.123-.419-.088-.59.047-.71.563-1.61.9-2.586.9a4.148 4.148 0 01-2.586-.9c-.171-.135-.409-.17-.59-.047A4.162 4.162 0 007 15.333zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm5.5-.09a2.518 2.518 0 01-1.552-.531 5.028 5.028 0 00-.248-.221 2.423 2.423 0 01-.7-1.703C15 8.099 16.12 7 17.5 7S20 8.099 20 9.455c0 1.355-1.12 2.454-2.5 2.454z" clipRule="evenodd"/>
        </svg>
    );
};

export default UsersSolid;