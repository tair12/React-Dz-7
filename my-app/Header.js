import React from 'react';

function Header(props) {
    return (
        <ul>
            <li>
                <NavLink to = "/">Home Page</NavLink>

            </li>
            <li>
                <NavLink to = "/post ">form page </NavLink>

            </li>
            <li>
                <NavLink to = "/contact">main page</NavLink>

            </li>
            <li>
                <NavLink to = "/about">about page</NavLink>

            </li>

        </ul>
    );
}

export default Header;
