import React from "react";
import { Link } from "react-router-dom";

function OnlyNameLink({ linkName, href, ...rest }) {
    return (
        <Link className='onlyNameLink' to={href} {...rest}>
            {linkName}
        </Link>
    );
}

export default OnlyNameLink;
