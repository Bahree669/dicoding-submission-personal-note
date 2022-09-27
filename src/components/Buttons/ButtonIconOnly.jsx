import React from "react";

function ButtonIconOnly({ children, optionalClass, ...props }) {
    return (
        <button className={`buttonIconOnly buttonIconOnly--${optionalClass}`} {...props}>
            {children}
        </button>
    );
}

export default ButtonIconOnly;
