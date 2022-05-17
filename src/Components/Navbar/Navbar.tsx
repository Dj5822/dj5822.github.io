import { AppBar } from '@mui/material';
import React from 'react';
import styles from './Navbar.module.scss'
import colors from '../../Styles/_color.module.scss';

const Navbar = () => {
    return (
        <AppBar>
            <ul className={styles.navList}>
                <li>
                    <a href="#welcome-section">HOME</a>
                </li>
                <li>
                    <a href="#status-section">STATUS</a>
                </li>
                <li>
                    <a href="#projects-section">PROJECTS</a>
                </li>
                <li>
                    <a id="profile-link" href="https://github.com/Dj5822" target="_blank" rel="noreferrer">PROFILE</a>
                </li>
            </ul>   
        </AppBar>
    );
}

export default Navbar;