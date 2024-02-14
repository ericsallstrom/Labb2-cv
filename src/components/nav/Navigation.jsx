import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../nav/nav-style.css';

const Navigation = () => {
    const [sidebarDisplay, setSidebarDisplay] = useState('none');
    const [currentPath, setCurrentPath] = useState('/');
    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname]);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/cv', label: 'CV' },
        { to: '/projects', label: 'Projects' },
        { to: '/contact', label: 'Contact' },
    ];

    const toggleSidebar = () => {
        setSidebarDisplay((prevDisplay) => (prevDisplay === 'none' ? 'flex' : 'none'));
    };

    const closeSidebar = () => {
        setSidebarDisplay('none');
    };

    const renderNavItems = (hideOnDesktop = false) => {
        return navLinks.map((navLink) => (
            <NavLink
                key={navLink.to}
                className={`nav-link ${hideOnDesktop ? 'hideOnDesktop' : 'hideOnMobile'}`}
                activeClassName={currentPath === navLink.to ? 'active' : ''}
                exact
                to={navLink.to}
                onClick={hideOnDesktop ? toggleSidebar : undefined}
            >
                {navLink.label}
            </NavLink>
        ));
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div onClick={closeSidebar}>
                    <img className="logo" src="/img/logo-nav.jpg" alt="Logo" />
                </div>
                <ul className="nav-links">
                    {/* <div className="nav-links-container">{renderNavItems()}</div> */}
                    {renderNavItems()}
                    <NavLink className="hideOnDesktop" onClick={toggleSidebar} to="#">
                        <i className="material-icons">menu</i>
                    </NavLink>
                </ul>
            </div>
            <div className="sidebar-container" style={{ display: sidebarDisplay }}>
                <ul className="sidebar-links">
                    <NavLink onClick={toggleSidebar} to="#">
                        <i className="material-icons">close</i>
                    </NavLink>
                    <div className="sidebar-links-container"></div>
                    {renderNavItems(true)}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
