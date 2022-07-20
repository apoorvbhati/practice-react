import React from "react";
import { Outlet } from "react-router";

const Navigation = () => {
    return (
        <React.Fragment>
            <h1>This is the navigation component</h1>
            <Outlet />
        </React.Fragment>
    );
}

export default Navigation;
