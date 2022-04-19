import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navbar from '../../Components/Navbar/Navbar';
import ProjectsPanel from '../../Components/ProjectsPanel/ProjectsPanel';
import StatusPanel from '../../Components/StatusPanel/StatusPanel';
import WelcomePanel from '../../Components/WelcomePanel/WelcomePanel';
import './Homepage.scss';
import welcomeImage from "../../Images/welcome-background.png";

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Parallax pages={3}>
                <ParallaxLayer offset={0} style={{backgroundImage: `url(${welcomeImage})`}}>
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