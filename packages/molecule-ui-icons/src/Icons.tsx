import * as React from 'react';
import cx from 'classnames';
import { throwPropError } from './helpers';
import Styles from './Style/Styles'

type Props = {
    fill?: string;
    size: 'small' | 'normal' | 'large' | 'huge';
    customSize?: string;
    className?: string;
};

const Icons: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

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

    const componentStyles = Styles()

    const classes = cx(componentStyles[size], className);
    return (
        <svg
            className={classes}
            style={customStyles}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <path fillRule="evenodd" clipRule="evenodd" d="M4.5 5.375C4.5 5.09886 4.72386 4.875 5 4.875H11C11.2761 4.875 11.5 5.09886 11.5 5.375V11.375C11.5 11.6511 11.2761 11.875 11 11.875H5C4.72386 11.875 4.5 11.6511 4.5 11.375V5.375ZM19.5 8.375C19.5 10.308 17.933 11.875 16 11.875C14.067 11.875 12.5 10.308 12.5 8.375C12.5 6.442 14.067 4.875 16 4.875C17.933 4.875 19.5 6.442 19.5 8.375ZM19.095 19.125C19.4923 19.125 19.7309 18.684 19.5136 18.3514L16.4185 13.6165C16.2212 13.3145 15.7788 13.3145 15.5815 13.6165L12.4867 18.3514C12.2693 18.684 12.5079 19.125 12.9052 19.125H19.095Z" fill={fill} />
        </svg>
    );
};

export default Icons;