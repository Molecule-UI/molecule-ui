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

const ColorPalette: React.FC<Props> = ({ fill, size = 'normal', customSize, className, onClick }) => {

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
            <path fillRule="evenodd" clipRule="evenodd" d="M8 13.8995V6C8 5.44771 7.55228 5 7 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V17C19 16.4477 18.5523 16 18 16H10.1421L16.3137 9.82843C16.7042 9.4379 16.7042 8.80474 16.3137 8.41422L15.6066 7.70711C15.2161 7.31658 14.5829 7.31658 14.1924 7.70711L8 13.8995ZM7.53862 14.3609V13.5104C7.53862 13.2343 7.31476 13.0104 7.03862 13.0104H6.03862C5.76248 13.0104 5.53862 13.2343 5.53862 13.5104V14.5104C5.53862 14.7865 5.76248 15.0104 6.03862 15.0104H6.88908L7.53862 14.3609ZM9.01085 17.1313C9.01055 17.1383 9.01041 17.1454 9.01041 17.1525V18.1525C9.01041 18.4287 9.23426 18.6525 9.51041 18.6525H10.5104C10.7865 18.6525 11.0104 18.4287 11.0104 18.1525V17.1525C11.0104 16.8764 10.7865 16.6525 10.5104 16.6525H9.51041C9.50329 16.6525 9.49621 16.6527 9.48917 16.653L9.01085 17.1313ZM5.53862 7.5C5.53862 7.22386 5.76248 7 6.03862 7H7.03862C7.31476 7 7.53862 7.22386 7.53862 7.5V8.5C7.53862 8.77614 7.31476 9 7.03862 9H6.03862C5.76248 9 5.53862 8.77614 5.53862 8.5V7.5ZM6.03862 10C5.76248 10 5.53862 10.2239 5.53862 10.5V11.5C5.53862 11.7761 5.76248 12 6.03862 12H7.03862C7.31476 12 7.53862 11.7761 7.53862 11.5V10.5C7.53862 10.2239 7.31476 10 7.03862 10H6.03862ZM12 17.1525C12 16.8764 12.2239 16.6525 12.5 16.6525H13.5C13.7761 16.6525 14 16.8764 14 17.1525V18.1525C14 18.4287 13.7761 18.6525 13.5 18.6525H12.5C12.2239 18.6525 12 18.4287 12 18.1525V17.1525ZM15.49 16.6525C15.2139 16.6525 14.99 16.8764 14.99 17.1525V18.1525C14.99 18.4287 15.2139 18.6525 15.49 18.6525H16.49C16.7661 18.6525 16.99 18.4287 16.99 18.1525V17.1525C16.99 16.8764 16.7661 16.6525 16.49 16.6525H15.49ZM7.53862 17.3704C7.53862 17.9227 7.0909 18.3704 6.53862 18.3704C5.98634 18.3704 5.53862 17.9227 5.53862 17.3704C5.53862 16.8181 5.98634 16.3704 6.53862 16.3704C7.0909 16.3704 7.53862 16.8181 7.53862 17.3704ZM8.93933 14.3536C8.74407 14.1583 8.74407 13.8417 8.93933 13.6464L9.64644 12.9393C9.8417 12.7441 10.1583 12.7441 10.3535 12.9393L11.0607 13.6464C11.2559 13.8417 11.2559 14.1583 11.0607 14.3536L10.3535 15.0607C10.1583 15.2559 9.8417 15.2559 9.64644 15.0607L8.93933 14.3536ZM10.9393 11.6464C10.7441 11.8417 10.7441 12.1583 10.9393 12.3536L11.6464 13.0607C11.8417 13.2559 12.1583 13.2559 12.3535 13.0607L13.0607 12.3536C13.2559 12.1583 13.2559 11.8417 13.0607 11.6464L12.3535 10.9393C12.1583 10.7441 11.8417 10.7441 11.6464 10.9393L10.9393 11.6464ZM12.9293 10.3536C12.7341 10.1583 12.7341 9.84171 12.9293 9.64645L13.6364 8.93934C13.8317 8.74408 14.1483 8.74408 14.3436 8.93934L15.0507 9.64645C15.2459 9.84171 15.2459 10.1583 15.0507 10.3536L14.3436 11.0607C14.1483 11.2559 13.8317 11.2559 13.6364 11.0607L12.9293 10.3536Z" fill={fill} />
        </svg>
    );
};

export default ColorPalette;