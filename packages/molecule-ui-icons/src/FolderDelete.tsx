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

const FolderDelete: React.FC<Props> = ({ fill, size = 'normal', customSize, className, onClick }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M4 8a1 1 0 011-1h3.586a1 1 0 01.707.293L10 8h9a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V8zm12.728 2.632c0-.073-.063-.132-.14-.132h-1.121c-.078 0-.14.06-.14.132v.175h-1.16a.142.142 0 00-.12.066c-.055.088.013.198.12.198h.319l.26 3.185a.274.274 0 00.28.244h2.003a.274.274 0 00.28-.244l.26-3.185h.318c.108 0 .175-.11.121-.198a.142.142 0 00-.121-.066h-1.159v-.175zm-1.261 0h1.12v.175h-1.12v-.175zm1.527.846c.008-.077-.056-.144-.139-.144a.137.137 0 00-.139.12l-.254 2.639c-.008.077.056.143.139.143a.137.137 0 00.139-.12l.255-2.638zm-.827-.012a.136.136 0 00-.14-.132c-.077 0-.14.06-.14.132v2.638c0 .073.063.132.14.132.078 0 .14-.059.14-.132v-2.638zm-.829-.012a.137.137 0 00-.139-.12c-.082 0-.146.067-.139.144l.255 2.639c.007.067.067.12.139.12.082 0 .146-.067.139-.144l-.255-2.64z" clipRule="evenodd"/>
        </svg>
    );
};

export default FolderDelete;