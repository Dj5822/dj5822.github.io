import React from 'react';
import './Homepage.scss';

const Homepage = () => {
    return (
        <div>
            <navbar id="navbar">
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
                    <a id="profile-link" href="https://github.com/Dj5822" target="_blank">Profile</a>
                    </li>
                </ul>
            </navbar>
            <div class="container" id="welcome-section">
            <h1>Welcome</h1>
            </div>
            <div class="container" id="status-section">
            <h2>Status</h2>
            <p><b>Name: </b><var id="name"> ??? </var></p>
            <p><b>Age: </b><var id="age"> ??? </var></p>
            <p><b>Birth date: </b><var id="birth-date"> ??/??/???? </var></p>
            <h2>Play Record</h2>
            <p><b>Current date: </b><var id="current-date"> ??/??/???? </var></p>
            <p><b>Current time: </b><var id="current-time"> ??? </var></p>
            <p><b>Play time: </b> <var id="play-time"> ?? days ?? hours ?? min ?? sec </var></p>
            </div>
            <div class="container" id="projects-section">
            <h1 id="projects-header">Projects</h1>
            <div class="project-tile">
                <a href="Projects/ArknightsInfo/arknightsInfo.html" id="arknightsLink" target="_blank">
                <img class="project-image" src="Images/ArknightsInfo.PNG" alt="Arknights Page" />ArknightsInfo
                </a>
            </div>
            <div class="project-tile">
                <a href="Projects/MakiseKirisu/MakiseKirisu.html" id="makiseLink" target="_blank">
                <img class="project-image" src="Images/MakiseKirisu.PNG" alt="Makise Kirisu Page" />MakiseKirisu
                </a>
            </div>
            <div class="project-tile">
                <a href="Projects/TechnicalDoc/technicalDoc.html" id="technicalLink" target="_blank">
                <img class="project-image" src="Images/TechnicalDoc.PNG" alt="Techdocs Page" />TechnicalDoc
                </a>
            </div>
            <div class="project-tile">
                <a href="Projects/AnimeSurvey/AnimeSurvey.html" id="animeSurveyLink" target="_blank">
                <img class="project-image" src="Images/AnimeSurvey.PNG" alt="Anime survey Page" />AnimeSurvey
                </a>
            </div>
            </div>
        </div>
    )
}

export default Homepage;