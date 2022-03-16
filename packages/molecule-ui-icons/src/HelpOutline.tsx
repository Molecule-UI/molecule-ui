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

const HelpOutline: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M19 12a7 7 0 11-14 0 7 7 0 0114 0zm1 0a8 8 0 11-16 0 8 8 0 0116 0zm-8.313 1.924c-.28 0-.51-.23-.48-.508.028-.257.073-.474.137-.651.103-.284.313-.598.63-.944l.807-.832c.345-.39.518-.81.518-1.258 0-.431-.113-.768-.34-1.01-.225-.247-.554-.37-.986-.37-.419 0-.756.11-1.01.332a1.07 1.07 0 00-.294.405c-.104.256-.313.49-.589.49h-.134c-.279 0-.51-.231-.452-.503a2 2 0 01.654-1.107c.469-.41 1.077-.616 1.825-.616.777 0 1.381.21 1.813.628.436.416.653.987.653 1.714 0 .72-.332 1.429-.998 2.127l-.672.666c-.215.238-.353.551-.414.938-.043.273-.26.499-.536.499h-.133zm-.558 1.954c0-.185.055-.339.166-.462.115-.128.284-.191.506-.191.222 0 .39.063.505.19a.651.651 0 01.173.463c0 .185-.058.34-.173.462-.115.12-.283.18-.505.18-.222 0-.39-.06-.506-.18a.666.666 0 01-.166-.462z" clipRule="evenodd"/>
        </svg>
    );
};

export default HelpOutline;