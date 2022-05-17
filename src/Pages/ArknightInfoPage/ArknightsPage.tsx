import styles from "./ArknightsPage.module.scss";
import logoRhodes from "./images/logo_rhodes.png";
import logoPenguin from "./images/logo_penguin.png"
import logoRhine from "./images/logo_rhine.png"
import logoLungmen from "./images/logo_lungmen.png"
import { AppBar, Box, Typography } from "@mui/material";
import colors from '../../Styles/_color.module.scss';

const ArknightsPage = () => {
    return (
        <div className={styles.arknightsPage}>
            <AppBar className={styles.navBar} sx={{backgroundColor: colors.backgroundColor, flexDirection: "row"}}>
                <Typography variant="h2">Arknights Info</Typography>
                <Box>
                    <a className="nav-link" href="#rhodesIslandInfo">
                    <img className={styles.logo} src={logoRhodes} alt="Rhodes Island Logo"/></a>
                    <a className="nav-link" href="#penguinLogisticsInfo">
                    <img className={styles.logo} src={logoPenguin} alt="Penguin Logistics Logo"/></a>
                    <a className="nav-link" href="#rhineLabInfo">
                    <img className={styles.logo} src={logoRhine} alt="Rhine Lab Logo"/></a>
                    <a className="nav-link" href="#greatLungmenInfo">
                    <img className={styles.logo} src={logoLungmen} alt="Lungmen Logo"/></a>
                </Box>
            </AppBar>
            <iframe title="Arknight Promotinal Video" 
                className={styles.video} src="https://www.youtube.com/embed/mdirvwfd9gw" 
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen />
            <form className={styles.form} action="https://www.freecodecamp.com/email-submit">
            <label htmlFor="email">Email: </label><input className={styles.email} type="email" name="email" placeholder="Enter your email address"></input>
            <input className={styles.submit} type="submit" value="Submit"></input>
            </form>
            <div id="rhodesIslandInfo" className={styles.info}>
                <img className={styles.factionImage} src={logoRhodes} alt="Rhodes Island Logo"/>
                <p>
                    Rhodes Island Pharmaceutical, Inc., or more simply Rhodes Island or Rhodes, is a pharmaceutical company that focuses on originium infection. However, behind the scenes, they also involve themselves in the more complex, societal effect of the infection, such as discrimination, and in doing so, typically employ paramilitary task forces as means to their ends. Several operators from some of the known detachments (Operation Detachment A4, Operation Preparation Detachment 1-Alpha, Operation Preparation Detachment 4-Alpha, and Operation Preparation Detachment 6-Alpha) are playable in-game.

                    Rhodes Island operators make home their base in the Rhodes Island Infrastructure Complex, or R.I.I.C.. It appears to be built or supported by RIM Billiton. Some operators from other factions, such as Vanilla from BlackSteel Worldwide, also make residence in the Rhodes Island base. The ship's reliability engineer is Ada Church, alias Closure.

                    Rhodes Island is publicly lead by Amiya, and is advised tactically by the Doctor. Its motto, May I enjoy my life and practice my art / Respected by all men and in all times, is a quote from the Hippocratic oath, an oath that binds a medical doctor to their profession and responsibilities. Ideally, Amiya seeks to provide care and shelter for the infected, solving the oripathy crisis on a case-by-case basis and stably building a new future for the infected. As such, all operators under Rhodes Island are granted permanent medical care, and other outsourced operator such as Exusiai have also expressed interest in getting routine checkups from Rhodes Island. This ideology contrasts with Reunion Movement, who seeks to overthrow the system entirely in order to make a home for the infected.
                </p>
            </div>
            <div id="penguinLogisticsInfo" className={styles.info}>
            <img className={styles.factionImage} src={logoPenguin} alt="Penguin Logistics Logo"/>
            <p>
                Penguin Logistics is a logistics company that works in close liaison with Rhodes Island. As the essential supply line for a variety of necesities, Penguin Logistics selects only the most capable operators and has almost an endless amount of supplies that it offers to alliances as well as maintaining itself. As for protection, Penguin Logistics doesn't seem to lack any. With several of the most powerful operators in Arknights, the logistics company simply couldn't be undermined.
            </p>
            </div>
            <div id="rhineLabInfo" className={styles.info}>
            <img className={styles.factionImage} src={logoRhine} alt="Rhine Lab Logo"/>
            <p>
                Rhine Lab, located in Colombia, is a company dedicated to life science, chemical manufacturing, biological application and other fields. It is a key technology group supported by Colombia. It covers a wide range of projects, and many of the published achievements have become the focus of attention in the industry.
            </p>
            </div>
            <div id="greatLungmenInfo" className={styles.info}>
            <img className={styles.factionImage} src={logoLungmen} alt="Lungmen Logo"/>
            <p>
                Great Lungmen, or more simply Lungmen, is a nation in the world of Arknights that is parallel to real-life China, but politically similar to a mix of Hong Kong, Shanghai, Tokyo, and Singapore. Wei Yenwu is the leader of the nation, and Ch'en acts as its head of security. Great Lungmen is known to be particularly harsh towards the infected, restricting them to the slums to keep them from infecting other citizens. An Annihilation Mode stage is set in this nation.
            </p>
            </div>
        </div>
    );
}

export default ArknightsPage;