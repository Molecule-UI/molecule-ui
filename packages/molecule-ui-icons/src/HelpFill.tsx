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

const HelpFill: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M12 20a8 8 0 100-16 8 8 0 000 16zm-.793-6.584c-.03.278.2.508.48.508h.132c.276 0 .493-.226.536-.498.061-.388.2-.7.414-.939l.672-.666c.665-.698.998-1.407.998-2.127 0-.727-.217-1.298-.653-1.714-.432-.419-1.036-.628-1.813-.628-.748 0-1.356.205-1.825.616-.34.3-.559.668-.654 1.107-.059.272.173.502.452.502h.134c.276 0 .485-.233.59-.489a1.07 1.07 0 01.292-.405c.255-.222.592-.333 1.011-.333.432 0 .76.124.987.37.226.243.339.58.339 1.011 0 .448-.173.868-.518 1.258l-.808.832c-.316.346-.526.66-.629.944-.064.177-.11.394-.137.651zm.088 2a.665.665 0 00-.166.462c0 .185.055.34.166.462.115.12.284.18.506.18.222 0 .39-.06.505-.18a.651.651 0 00.173-.462.651.651 0 00-.173-.462c-.115-.128-.283-.191-.505-.191-.222 0-.39.063-.506.19z" clipRule="evenodd"/>
        </svg>
    );
};

export default HelpFill;