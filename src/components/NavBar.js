import React from "react";
import { NavLink } from "react-router-dom";

// define the NavBar components
function NavBar(){
    return (
        <div className="navlinks">
            <NavLink
            to="/"
            activeStyle={{
                background: "red"
            }}
            >
                Home
            </NavLink>
            <NavLink
            to="/booklist"
            activeStyle={{
                background: "red"
            }}
            >
                View Our Library
            </NavLink>
            <NavLink
            to="/newbook"
            activeStyle={{
                background: "red"
            }}
            >
                Add New Book Entry
            </NavLink>
        </div>
    )
}

export default NavBar;