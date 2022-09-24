import React from "react";
import { NavLink } from "react-router-dom";

function NavigationLink({ to, children, optionalClass, ...rest }) {
    return (
        <NavLink to={to} className={`navigationLink navigationLink--${optionalClass}`} {...rest}>
            {children}
        </NavLink>
    );
}

export default NavigationLink;
