import PropTypes from 'prop-types';
import React from "react";


/**
 * Minimal Button React Component.
 *
 * @author [Amol Meshram](https://github.com/j4jinx)
 */
const Button = (props) => {
    const {
        variant = "text",
        size = "md",
        color = '#212121',
        contrastColor = '#ffffff',
        to = "#",
        component,
        style = {},
        children,
        ...rest
    } = props;


    let Btn;
    if (to !== "#" && component) {
        Btn = component;
    } else {
        Btn = ({ children, to, ...props }) => {
            return <button {...props}>{children}</button>;
        };
    }

    const varStyle = {};
    if (variant === "outlined") {
        varStyle.background = `${contrastColor}`;
        varStyle.border = `1px solid ${color}`;
        varStyle.color = `${color}`;
    } else if (variant === "contained") {
        varStyle.background = `${color}`;
        varStyle.color = `${contrastColor}`;
    } else {
        varStyle.background = `${contrastColor}`;
        varStyle.color = `${color}`;
    }

    const sizeStyle = {};
    if (size === "sm") {
        sizeStyle.padding = `4px 8px`;
        sizeStyle.fontSize = `0.8rem`;
        sizeStyle.borderRadius = `4px`;
    } else if (size === "lg") {
        sizeStyle.padding = `8px 24px`;
        sizeStyle.fontSize = `0.94rem`;
        sizeStyle.borderRadius = `4px`;
    } else if (size === "md") {
        sizeStyle.padding = `6px 16px`;
        sizeStyle.fontSize = `0.88rem`;
        sizeStyle.borderRadius = `4px`;
    } else {
        sizeStyle.padding = `4px`;
    }


    return (
        <Btn
            style={{
                WebkitAppearance: `none`,
                WebkitTapHighlightColor: `transparent`,
                WebkitUserSelect: `none`,
                userUelect: `none`,
                boxSizing: `border-box`,
                font: `initial`,
                padding: 0,
                margin: 0,
                color: `inherit`,
                backgroundColor: `inherit`,
                whiteSpace: `nowrap`,
                alignSelf: `center`,
                outline: `none`,
                border: `none`,
                textDecoration: `none`,
                cursor: `pointer`,
                textAlign: `center`,
                transition: `opacity 0s`,
                display: `inline-flex`,
                fontFamily: `inherit`,
                fontSize: `0.88rem`,
                fontWeight: 500,
                lineHeight: 1.75,
                textTransform: `uppercase`,
                justifyContent: `center`,
                alignItems: `center`,
                alignContent: `center`,
                ...varStyle,
                ...sizeStyle,
                ...style,
            }}

            to={to}
            {...rest}
        >
            {children}
        </Btn >
    );
}

Button.propTypes = {
    /**
    * Button variant  
    */
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
    /**
    * Button size   
    */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /**
    * Button color   
    */
    color: PropTypes.string,
    /**
   * Button Contrast color   
   */
    contrastColor: PropTypes.string,
    /**
    * @ignore
    */
    to: PropTypes.string,
    /**
   * @ignore
   */
    component: PropTypes.elementType,
    /**
   * @ignore
   */
    children: PropTypes.node,
    /**
    *@ignore
    */
    className: PropTypes.string,
    /**
     *@ignore
     */
    style: PropTypes.object,
};

Button.defaultProps = {
    variant: 'text',
    size: 'md',
    color: '#212121',
    contrastColor: '#ffffff',
};



export default Button;