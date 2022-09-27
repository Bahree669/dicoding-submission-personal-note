import React from "react";

function OnlyNameButton({ buttonName, invers, ...rest }) {
    return (
        <button role='button' className={`onlyNameButton onlyNameButton--${invers}`} {...rest}>
            {buttonName}
        </button>
    );
}

export default OnlyNameButton;
