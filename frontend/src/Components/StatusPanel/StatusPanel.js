import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import styles from './StatusPanel.module.scss';
import getUserData from '../../Services/userData'
import { Typography, Divider, List, ListItem } from '@mui/material';
import colors from '../../Styles/_color.scss';
import background from '../../Images/grass.png';

const StatusPanel = () => {
    const [userData, setUserData] = useState({
        name: "?",
        gender: "?",
        age: "?",
        birthday: "?",
        height: "?",
        playRecord: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    });

    useEffect(() => {
        const interval = setInterval(() => setUserData(getUserData()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, [])

    return (
        <div id="status-section" className={styles.StatusPanel} style={{backgroundImage: `url(${background})`}}>
            <Card className={styles.StatusCard} sx={{backgroundColor: colors.backgroundColor, color: "#ffffff"}}>
                <Typography variant='h4'>{userData.name}</Typography>
                <List>
                    <ListItem className={styles.StatusListItem}>
                        <Card className={styles.StatusLabel}>
                            <Typography>Gender </Typography>
                        </Card>
                        <Typography>{userData.gender}</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem className={styles.StatusListItem}>
                        <Card className={styles.StatusLabel}>
                            <Typography>Age </Typography>
                        </Card>
                        <Typography>{userData.age}</Typography>  
                    </ListItem>
                    <Divider />
                    <ListItem className={styles.StatusListItem}>
                        <Card className={styles.StatusLabel}>
                            <Typography>Birthday</Typography>
                        </Card>
                        <Typography>{userData.birthday}</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem className={styles.StatusListItem}>
                        <Card className={styles.StatusLabel}>
                            <Typography>Height </Typography>
                        </Card>
                        <Typography>{userData.height}</Typography>
                    </ListItem>
                </List>
            </Card>

            <Card className={styles.PlayRecordCard} sx={{backgroundColor: colors.backgroundColor, color: "#ffffff"}}>
                <Typography variant='h3'>Play Record</Typography>
                <div className={styles.PlayRecordLayout}>
                    <Card className={styles.PlayRecordCounter}>
                        <Typography variant='h2'>{userData.playRecord.days}</Typography>
                        <Typography>Days</Typography>
                    </Card>
                    <Card className={styles.PlayRecordCounter}>
                        <Typography variant='h2'>{userData.playRecord.hours}</Typography>
                        <Typography>Hours</Typography>
                    </Card>
                    <Card className={styles.PlayRecordCounter}>
                        <Typography variant='h2'>{userData.playRecord.minutes}</Typography>
                        <Typography>Minutes</Typography>
                    </Card>
                    <Card className={styles.PlayRecordCounter}>
                        <Typography variant='h2'>{userData.playRecord.seconds}</Typography>
                        <Typography>Seconds</Typography>
                    </Card>
                </div>
            </Card>
        </div>
    );
}

export default StatusPanel;