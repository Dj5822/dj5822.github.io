import React from 'react';
import './WelcomePanel.scss';
import welcomeImage from "../../Images/welcome-background.png";

const WelcomePanel = () => {
    return (
        <div className="WelcomePanel">
            <img src={welcomeImage} alt="Aquarium background"/>
            <h1>Welcome</h1>
        </div>
    );
}

export default WelcomePanel;