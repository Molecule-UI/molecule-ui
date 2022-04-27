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

const Twitter: React.FC<Props> = ({ fill, size = 'normal', customSize, className, onClick }) => {

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
            <path d="M20 7.41176C19.4111 7.65882 18.7763 7.82118 18.1185 7.89882C18.7916 7.52471 19.3117 6.93176 19.5564 6.21882C18.9216 6.57176 18.218 6.81882 17.4761 6.96C16.8719 6.35294 16.0229 6 15.0593 6C13.262 6 11.7935 7.35529 11.7935 9.02824C11.7935 9.26824 11.8241 9.50118 11.8776 9.72C9.15488 9.59294 6.7304 8.38588 5.11663 6.55765C4.83365 7.00235 4.67304 7.52471 4.67304 8.07529C4.67304 9.12706 5.24665 10.0588 6.13384 10.5882C5.59082 10.5882 5.08604 10.4471 4.64245 10.2353C4.64245 10.2353 4.64245 10.2353 4.64245 10.2565C4.64245 11.7247 5.77438 12.9529 7.27342 13.2282C6.99809 13.2988 6.70746 13.3341 6.40918 13.3341C6.20268 13.3341 5.99618 13.3129 5.79732 13.2776C6.21033 14.4706 7.41109 15.36 8.8566 15.3812C7.73996 16.2 6.32505 16.68 4.78011 16.68C4.52008 16.68 4.26004 16.6659 4 16.6376C5.45315 17.4988 7.18164 18 9.03251 18C15.0593 18 18.3709 13.3835 18.3709 9.38118C18.3709 9.24706 18.3709 9.12 18.3633 8.98588C19.0057 8.56235 19.5564 8.02588 20 7.41176Z" fill={fill} />
        </svg>
    );
};

export default Twitter;