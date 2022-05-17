import { AppBar } from '@mui/material';
import React from 'react';
import styles from './Navbar.module.scss'
import colors from '../../Styles/_color.module.scss';

const Navbar = () => {
    return (
        <AppBar sx={{backgroundColor: colors.backgroundColor}}>
            <ul className={styles.navList}>
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
        </AppBar>
    );
}

export default Navbar;