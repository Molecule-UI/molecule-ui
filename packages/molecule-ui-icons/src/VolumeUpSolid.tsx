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

const VolumeUpSolid: React.FC<Props> = ({ fill, size = 'normal', customSize, className, onClick }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M4 9.875a.5.5 0 01.5-.5h4.312a.5.5 0 00.33-.124l4.029-3.525a.5.5 0 01.829.376v11.796a.5.5 0 01-.83.376L9.142 14.75a.5.5 0 00-.329-.124H4.5a.5.5 0 01-.5-.5v-4.25zm14.596-2.471a6.5 6.5 0 01-1.346 10.225.5.5 0 11-.5-.866A5.498 5.498 0 0019.5 12a5.5 5.5 0 00-2.75-4.763.5.5 0 01.5-.866 6.5 6.5 0 011.346 1.033zm-4.029 8.31a.5.5 0 01.183-.683A3.497 3.497 0 0016.5 12a3.5 3.5 0 00-1.75-3.031.5.5 0 01.5-.866 4.5 4.5 0 010 7.794.5.5 0 01-.683-.183z" clipRule="evenodd"/>
        </svg>
    );
};

export default VolumeUpSolid;