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

const DollarFill: React.FC<Props> = ({ fill, size = 'normal', customSize, className, onClick }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M12 20a8 8 0 100-16 8 8 0 000 16zm1.389-6.884c.28.22.419.493.419.816 0 .382-.161.684-.484.905-.322.22-.764.331-1.327.331-.576 0-1.02-.131-1.334-.394-.314-.263-.47-.639-.47-1.127H9c0 .695.226 1.246.677 1.653.455.403 1.082.635 1.882.695V17h.953v-1.005c.787-.067 1.397-.281 1.83-.642.439-.362.658-.839.658-1.432a1.78 1.78 0 00-.264-.974c-.172-.277-.443-.519-.812-.726-.365-.21-.877-.402-1.534-.574-.653-.175-1.124-.368-1.412-.579a1.02 1.02 0 01-.425-.857c0-.386.135-.686.406-.9.27-.218.662-.327 1.173-.327.49 0 .879.146 1.167.437.287.291.431.684.431 1.179h1.186c0-.72-.202-1.286-.606-1.7-.4-.414-.96-.661-1.682-.742V7h-.96v1.153c-.717.07-1.282.29-1.695.658-.408.368-.612.84-.612 1.415 0 .565.208 1.032.625 1.4.421.365 1.09.662 2.004.89.658.179 1.124.379 1.399.6z" clipRule="evenodd"/>
        </svg>
    );
};

export default DollarFill;