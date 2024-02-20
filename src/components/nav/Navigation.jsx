import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import BgColorChanger from '../BgColorChanger';
import '../nav/nav-style.css';

const Navigation = ({ onBgColorChange }) => {
    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/cv', label: 'CV' },
        { to: '/projects', label: 'Projects' },
        { to: '/contact', label: 'Contact' },
    ];

    const [sidebarDisplay, setSidebarDisplay] = useState('none');
    const sidebarRef = useRef(null);

    useEffect(() => {
        const closeSidebarOnOutsideClick = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                closeSidebar();
            }
        };

        document.addEventListener('mousedown', closeSidebarOnOutsideClick);

        return () => {
            document.removeEventListener('mousedown', closeSidebarOnOutsideClick);
        };
    }, []);

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
                <div>
                    <BgColorChanger onBgColorChange={onBgColorChange} />
                </div>
                <ul className="nav-links">
                    {/* <div className="nav-links-container">{renderNavItems()}</div> */}
                    {renderNavItems()}
                    <NavLink className="hideOnDesktop" onClick={toggleSidebar} to="#">
                        <i className="material-icons">menu</i>
                    </NavLink>
                </ul>
            </div>
            <div className="sidebar-container" style={{ display: sidebarDisplay }} ref={sidebarRef}>
                <ul className="sidebar-links">
                    <NavLink className="material-icons" onClick={toggleSidebar} to="#">
                        close
                        {/* <i className="material-icons">close</i> */}
                    </NavLink>
                    <div className="sidebar-links-container"></div>
                    {renderNavItems(true)}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
