import { Card, Typography } from '@mui/material';
import styles from './ProjectsPanel.module.scss';
import colors from '../../Styles/_color.module.scss';
import arknightsImage from '../../Images/ArknightsInfo.png';
import kirisuImage from '../../Images/MakiseKirisu.png';
import techDocImage from '../../Images/TechnicalDoc.png';
import surveyImage from '../../Images/AnimeSurvey.png';

const ProjectsPanel = () => {
    return (
        <div id="projects-section" className={styles.projectsSection}>
            <Typography variant='h1'>Projects</Typography>

            <div className={styles.projectsContainer}>
                <Card className={styles.projectTile} sx={{backgroundColor: colors.primaryColor, color: colors.textColor}}>
                    <a className={styles.projectLink} href="./arknights" target="_blank">
                        <img className={styles.projectImage} src={arknightsImage} alt="Arknights Page" />
                        <Typography variant='h4'>ArknightsInfo</Typography>
                    </a>
                </Card>
                <Card className={styles.projectTile} sx={{backgroundColor: colors.primaryColor, color: colors.textColor}}>
                    <a className={styles.projectLink} href="./makise-kirisu" target="_blank">
                        <img className={styles.projectImage} src={kirisuImage} alt="Makise Kirisu Page" />
                        <Typography variant='h4'>MakiseKirisu</Typography>
                    </a>
                </Card>
                <Card className={styles.projectTile} sx={{backgroundColor: colors.primaryColor, color: colors.textColor}}>
                    <a className={styles.projectLink} href="./techdocs" target="_blank">
                        <img className={styles.projectImage} src={techDocImage} alt="Techdocs Page" />
                        <Typography variant='h4'>TechnicalDoc</Typography>
                    </a>
                </Card>
                <Card className={styles.projectTile} sx={{backgroundColor: colors.primaryColor, color: colors.textColor}}>
                    <a className={styles.projectLink} href="./animesurvey" target="_blank">
                        <img className={styles.projectImage} src={surveyImage} alt="Anime survey Page" />
                        <Typography variant='h4'>AnimeSurvey</Typography>
                    </a>
                </Card>
            </div>            
        </div>
    );
}

export default ProjectsPanel;