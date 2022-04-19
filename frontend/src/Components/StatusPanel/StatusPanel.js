import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import styles from './StatusPanel.module.scss';
import getUserData from '../../Services/userData'
import { Typography } from '@mui/material';
import colors from '../../Styles/_color.scss'

const StatusPanel = () => {
    const [userData, setUserData] = useState({
        name: "?",
        age: "?",
        birthDate: "?",
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
        <div className={styles.StatusPanel}>
            <Card className={styles.StatusCard} sx={{backgroundColor: colors.backgroundColor, color: "#ffffff"}}>
                <Typography variant='h3'>Status</Typography>
                <Typography><b>Name: </b>{userData.name}</Typography>
                <Typography><b>Age: </b>{userData.age}</Typography>
                <Typography><b>Birth date: </b>{userData.birthDate}</Typography>
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