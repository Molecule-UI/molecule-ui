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

const Typography: React.FC<Props> = ({ fill, size = 'normal', customSize, className, onClick }) => {

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
            <path fillRule="evenodd" clipRule="evenodd" d="M5 5V19C5 19.5523 5.44772 20 6 20H6.07692H8.80769C9.08383 20 9.30769 19.7761 9.30769 19.5C9.30769 19.2239 9.08384 19 8.80769 19H7.07692C6.52464 19 6.07692 18.5523 6.07692 18V6C6.07692 5.44772 6.52464 5 7.07692 5H8.80769C9.08384 5 9.30769 4.77614 9.30769 4.5C9.30769 4.22386 9.08383 4 8.80769 4H6.07692H6C5.44772 4 5 4.44772 5 5ZM7.15385 16.3529V17H11.2538V16.3529H10.8673C10.128 16.3529 9.75832 16.1013 9.75832 15.598C9.75832 15.4029 9.80873 15.1821 9.90955 14.9356L10.5481 13.3179H14.9673L15.6394 15.0434C15.6842 15.1564 15.7178 15.2591 15.7402 15.3515C15.7626 15.444 15.7738 15.5313 15.7738 15.6134C15.7738 16.1064 15.4378 16.3529 14.7656 16.3529H14.3792V17H19V16.3529H18.7816C18.4567 16.3529 18.2047 16.2965 18.0254 16.1835C17.8574 16.0705 17.7118 15.8548 17.5885 15.5364L13.7911 6H12.4804L8.75014 15.1513C8.5485 15.6443 8.36367 15.9678 8.19564 16.1218C8.03881 16.2759 7.79796 16.3529 7.4731 16.3529H7.15385ZM14.6648 12.5476H10.8673L12.0099 9.71289C12.2004 9.23016 12.3572 8.81933 12.4804 8.48039C12.6036 8.14146 12.7045 7.78711 12.7829 7.41737C12.8725 7.78711 12.9901 8.17227 13.1357 8.57283C13.2814 8.97339 13.4438 9.39963 13.623 9.85154L14.6648 12.5476Z" fill={fill} />
        </svg>
    );
};

export default Typography;