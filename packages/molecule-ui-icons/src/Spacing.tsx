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

const Spacing: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

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
            <path fillRule="evenodd" clipRule="evenodd" d="M4.5 7C4.22386 7 4 7.22386 4 7.5V16.5C4 16.7761 4.22386 17 4.5 17C4.77614 17 5 16.7761 5 16.5V7.5C5 7.22386 4.77614 7 4.5 7ZM19.5 7C19.2239 7 19 7.22386 19 7.5V16.5C19 16.7761 19.2239 17 19.5 17C19.7761 17 20 16.7761 20 16.5V7.5C20 7.22386 19.7761 7 19.5 7ZM15.1716 8.46447L18.3536 11.6464C18.5488 11.8417 18.5488 12.1583 18.3536 12.3536L15.1716 15.5355C14.9763 15.7308 14.6597 15.7308 14.4645 15.5355C14.2692 15.3403 14.2692 15.0237 14.4645 14.8284L16.7929 12.5H7.20711L9.53553 14.8284C9.7308 15.0237 9.7308 15.3403 9.53553 15.5355C9.34027 15.7308 9.02369 15.7308 8.82843 15.5355L5.64645 12.3536C5.45118 12.1583 5.45118 11.8417 5.64645 11.6464L8.82843 8.46447C9.02369 8.2692 9.34027 8.2692 9.53553 8.46447C9.7308 8.65973 9.7308 8.97631 9.53553 9.17157L7.20711 11.5H16.7929L14.4645 9.17157C14.2692 8.97631 14.2692 8.65973 14.4645 8.46447C14.6597 8.2692 14.9763 8.2692 15.1716 8.46447Z" fill={fill} />
        </svg>
    );
};

export default Spacing;