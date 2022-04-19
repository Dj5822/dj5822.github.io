import './ProjectsPanel.scss';

const ProjectsPanel = () => {
    return (
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
    );
}

export default ProjectsPanel;