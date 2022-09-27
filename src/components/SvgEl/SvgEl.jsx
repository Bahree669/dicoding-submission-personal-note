import React from "react";

function SvgEl({ children, ...rest }) {
    return (
        <svg
            aria-hidden='true'
            focusable='false'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            {...rest}
        >
            {children}
        </svg>
    );
}

export default SvgEl;
