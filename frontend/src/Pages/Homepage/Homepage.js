import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import ProjectsPanel from '../../Components/ProjectsPanel/ProjectsPanel';
import StatusPanel from '../../Components/StatusPanel/StatusPanel';
import WelcomePanel from '../../Components/WelcomePanel/WelcomePanel';
import './Homepage.scss';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <ProjectsPanel />
        </div>
    )
}

export default Homepage;