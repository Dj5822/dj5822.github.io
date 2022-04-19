import { Card, Typography } from '@mui/material';
import styles from './ProjectsPanel.module.scss';

import arknightsImage from '../../Images/ArknightsInfo.PNG';
import kirisuImage from '../../Images/MakiseKirisu.PNG';
import techDocImage from '../../Images/TechnicalDoc.PNG';
import surveyImage from '../../Images/AnimeSurvey.PNG';

const ProjectsPanel = () => {
    return (
        <div id="projects-section" className={styles.projectsSection}>
            <Typography variant='h1'>Projects</Typography>

            <div className={styles.projectsContainer}>
                <Card className={styles.projectTile}>
                    <a className={styles.projectLink} href="Projects/ArknightsInfo/arknightsInfo.html" target="_blank">
                        <img className={styles.projectImage} src={arknightsImage} alt="Arknights Page" />
                        <Typography variant='h4'>ArknightsInfo</Typography>
                    </a>
                </Card>
                <Card className={styles.projectTile}>
                    <a className={styles.projectLink} href="Projects/MakiseKirisu/MakiseKirisu.html" target="_blank">
                        <img className={styles.projectImage} src={kirisuImage} alt="Makise Kirisu Page" />
                        <Typography variant='h4'>MakiseKirisu</Typography>
                    </a>
                </Card>
                <Card className={styles.projectTile}>
                    <a className={styles.projectLink} href="Projects/TechnicalDoc/technicalDoc.html" target="_blank">
                        <img className={styles.projectImage} src={techDocImage} alt="Techdocs Page" />
                        <Typography variant='h4'>TechnicalDoc</Typography>
                    </a>
                </Card>
                <Card className={styles.projectTile}>
                    <a className={styles.projectLink} href="Projects/AnimeSurvey/AnimeSurvey.html" target="_blank">
                        <img className={styles.projectImage} src={surveyImage} alt="Anime survey Page" />
                        <Typography variant='h4'>AnimeSurvey</Typography>
                    </a>
                </Card>
            </div>            
        </div>
    );
}

export default ProjectsPanel;