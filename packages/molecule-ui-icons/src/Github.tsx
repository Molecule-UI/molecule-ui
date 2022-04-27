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

const Github: React.FC<Props> = ({ fill, size = 'normal', customSize, className, onClick }) => {

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
            <path d="M12 4C10.9494 4 9.90914 4.21206 8.93853 4.62408C7.96793 5.0361 7.08601 5.64001 6.34315 6.40132C4.84285 7.93886 4 10.0242 4 12.1986C4 15.8224 6.296 18.8969 9.472 19.9873C9.872 20.0529 10 19.7987 10 19.5774C10 19.3888 10 18.8723 10 18.1918C7.784 18.6837 7.312 17.0932 7.312 17.0932C6.944 16.1421 6.424 15.888 6.424 15.888C5.696 15.3797 6.48 15.3961 6.48 15.3961C7.28 15.4535 7.704 16.2405 7.704 16.2405C8.4 17.4867 9.576 17.1178 10.032 16.921C10.104 16.3881 10.312 16.0274 10.536 15.8224C8.76 15.6174 6.896 14.9124 6.896 11.7887C6.896 10.8786 7.2 10.149 7.72 9.56686C7.64 9.36189 7.36 8.50924 7.8 7.40243C7.8 7.40243 8.472 7.18106 10 8.23868C10.632 8.05831 11.32 7.96813 12 7.96813C12.68 7.96813 13.368 8.05831 14 8.23868C15.528 7.18106 16.2 7.40243 16.2 7.40243C16.64 8.50924 16.36 9.36189 16.28 9.56686C16.8 10.149 17.104 10.8786 17.104 11.7887C17.104 14.9206 15.232 15.6092 13.448 15.8142C13.736 16.0684 14 16.5685 14 17.3309C14 18.4296 14 19.315 14 19.5774C14 19.7987 14.128 20.0611 14.536 19.9873C17.712 18.8887 20 15.8224 20 12.1986C20 11.122 19.7931 10.0558 19.391 9.06114C18.989 8.06644 18.3997 7.16263 17.6569 6.40132C16.914 5.64001 16.0321 5.0361 15.0615 4.62408C14.0909 4.21206 13.0506 4 12 4V4Z" fill={fill} />
        </svg>
    );
};

export default Github;