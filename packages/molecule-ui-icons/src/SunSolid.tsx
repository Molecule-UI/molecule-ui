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

const SunSolid: React.FC<Props> = ({ fill, size = 'normal', customSize, className, onClick }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M11 4.5a.5.5 0 011 0v1a.5.5 0 01-1 0v-1zm6 7.5a5 5 0 11-10 0 5 5 0 0110 0zm-5 6.5a.5.5 0 011 0v1a.5.5 0 01-1 0v-1zm.975-14.003a.5.5 0 01.966.259l-.259.965a.5.5 0 11-.966-.258l.26-.966zm-2.657 13.782a.5.5 0 11.966.258l-.26.966a.5.5 0 01-.965-.259l.259-.965zm4.566-13.274a.5.5 0 11.866.5l-.5.866a.5.5 0 01-.866-.5l.5-.866zM8.75 17.629a.5.5 0 11.866.5l-.5.866a.5.5 0 11-.866-.5l.5-.866zm7.846-11.64a.5.5 0 11.707.708l-.707.707a.5.5 0 11-.707-.707l.707-.707zM7.404 16.597a.5.5 0 11.707.707l-.707.707a.5.5 0 11-.707-.707l.707-.707zm10.591-9.212a.5.5 0 01.5.866l-.866.5a.5.5 0 11-.5-.866l.866-.5zM6.371 15.25a.5.5 0 01.5.866l-.866.5a.5.5 0 11-.5-.866l.866-.5zm12.615-6.157a.5.5 0 01.258.966l-.965.259a.5.5 0 01-.26-.966l.967-.26zM5.72 13.683a.5.5 0 01.26.965l-.967.26a.5.5 0 01-.258-.967l.965-.259zM19.5 11a.5.5 0 110 1h-1a.5.5 0 010-1h1zm-14 1a.5.5 0 010 1h-1a.5.5 0 010-1h1zm14.003.975a.5.5 0 01-.259.966l-.965-.259a.5.5 0 11.258-.966l.966.26zM5.721 10.318a.5.5 0 11-.258.966l-.966-.26a.5.5 0 01.259-.965l.965.259zm13.274 4.566a.5.5 0 01-.5.866l-.866-.5a.5.5 0 11.5-.866l.866.5zM6.371 8.75a.5.5 0 11-.5.866l-.866-.5a.5.5 0 11.5-.866l.866.5zm11.64 7.846a.5.5 0 11-.708.707l-.707-.707a.5.5 0 11.707-.707l.707.707zM7.403 7.404a.5.5 0 01-.707.707l-.707-.707a.5.5 0 01.707-.707l.707.707zm9.212 10.591a.5.5 0 11-.866.5l-.5-.866a.5.5 0 11.866-.5l.5.866zM8.75 6.371a.5.5 0 01-.866.5l-.5-.866a.5.5 0 01.866-.5l.5.866zm6.157 12.615a.5.5 0 11-.966.258l-.259-.965a.5.5 0 11.966-.26l.259.967zM10.317 5.72a.5.5 0 01-.965.26l-.26-.967a.5.5 0 11.967-.258l.259.965z" clipRule="evenodd"/>
        </svg>
    );
};

export default SunSolid;