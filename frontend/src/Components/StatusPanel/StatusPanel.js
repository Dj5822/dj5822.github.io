import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import './StatusPanel.scss';
import background from '../../Images/grass.png';
import getUserData from '../../Services/userData'
import { Typography } from '@mui/material';

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
        <div className="StatusPanel">
            <Card>
                <Typography variant='h3'>Status</Typography>
                <Typography><b>Name: </b>{userData.name}</Typography>
                <Typography><b>Age: </b>{userData.age}</Typography>
                <Typography><b>Birth date: </b>{userData.birthDate}</Typography>
            </Card>

            <Card>
                <Typography variant='h3'>Play Record</Typography>
                <Typography><b>Days: </b>{userData.playRecord.days}</Typography>
                <Typography><b>Hours: </b>{userData.playRecord.hours}</Typography>
                <Typography><b>Minutes: </b>{userData.playRecord.minutes}</Typography>
                <Typography><b>Seconds: </b>{userData.playRecord.seconds}</Typography>
            </Card>
        </div>
    );
}

export default StatusPanel;