import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import React from 'react';

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">ToroGrub</Link>
            <ul>
                <CustomLink to="/pricing">Pricing</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/signup">Register</CustomLink>

            </ul>
        </nav>
    );
}

export default Navbar;



function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    );
}