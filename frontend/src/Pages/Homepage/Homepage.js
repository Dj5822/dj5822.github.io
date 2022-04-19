import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navbar from '../../Components/Navbar/Navbar';
import ProjectsPanel from '../../Components/ProjectsPanel/ProjectsPanel';
import StatusPanel from '../../Components/StatusPanel/StatusPanel';
import WelcomePanel from '../../Components/WelcomePanel/WelcomePanel';
import styles from './Homepage.module.scss';

const Homepage = () => {
    return (
        <div className={styles.backgroundImage} >
            <Navbar />
            <Parallax pages={3} style={{ top: '0', left: '0' }}>
                <ParallaxLayer offset={0} >
                    <WelcomePanel />
                </ParallaxLayer>
                <ParallaxLayer offset={1}>
                    <StatusPanel />
                </ParallaxLayer>
                <ParallaxLayer offset={2}>
                    <ProjectsPanel />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default Homepage;