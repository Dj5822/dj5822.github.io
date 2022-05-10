import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navbar from '../../Components/Navbar/Navbar';
import ProjectsPanel from '../../Components/ProjectsPanel/ProjectsPanel';
import StatusPanel from '../../Components/StatusPanel/StatusPanel';
import WelcomePanel from '../../Components/WelcomePanel/WelcomePanel';
import styles from './Homepage.module.scss';
import grassBackground from '../../Images/grass.png';

const Homepage = () => {
    return (
        <div className={styles.backgroundImage} style={{backgroundImage: `url(${grassBackground})`}} >
            <Navbar />
            <Parallax pages={3}>
                <ParallaxLayer offset={0} >
                    <WelcomePanel />
                </ParallaxLayer>

                <ParallaxLayer offset={1} >
                    <StatusPanel />
                </ParallaxLayer>

                <ParallaxLayer offset={2} >
                    <ProjectsPanel />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default Homepage;