import React from 'react';
import styles from './WelcomePanel.module.scss';
import welcomeImage from "../../Images/welcome-background.png";
import { Typography } from '@mui/material';

const WelcomePanel = () => {
    return (
        <div id="welcome-section" className={styles.WelcomePanel} style={{backgroundImage: `url(${welcomeImage})`}}>
            <h1 className={styles.Title}>Welcome</h1>
        </div>
    );
}

export default WelcomePanel;