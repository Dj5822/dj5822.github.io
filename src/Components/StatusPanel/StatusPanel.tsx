import React, { useEffect, useState } from 'react';
import styles from './StatusPanel.module.scss';
import getUserData from '../../Services/userData';
import StatusCard from '../StatusCard/StatusCard';
import PlayRecord from '../PlayRecord/PlayRecord';

const StatusPanel = () => {
    const [userData, setUserData] = useState({
        name: "?",
        gender: "?",
        age: 0,
        birthday: "?",
        height: 0,
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
        <div id="status-section" className={styles.StatusPanel} >
            <StatusCard name={userData.name} gender={userData.gender} age={userData.age} birthday={userData.birthday} height={userData.height} />
            <PlayRecord days={userData.playRecord.days} hours={userData.playRecord.hours} minutes={userData.playRecord.minutes} seconds={userData.playRecord.seconds} />
        </div>
    );
}

export default StatusPanel;