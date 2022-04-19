import React from 'react';
import './Navbar.scss'

const Navbar = () => {
    return (
        <div id="navbar">
            <ul id="nav-list">
                    <li>
                    <a href="#welcome-section">Home</a>
                    </li>
                    <li>
                    <a href="#status-section">Status</a>
                    </li>
                    <li>
                    <a href="#projects-section">Projects</a>
                    </li>
                    <li>
                    <a id="profile-link" href="https://github.com/Dj5822" target="_blank" rel="noreferrer">Profile</a>
                    </li>
                </ul>
        </div>
    )
}

export default Navbar;