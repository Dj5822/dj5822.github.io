import { Typography, Card } from '@mui/material';
import colors from '../../Styles/_color.module.scss';
import styles from './PlayRecord.module.scss';

interface Time {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
}

const PlayRecord = (props:Time) => {
    return (
        <Card className={styles.PlayRecordCard} sx={{backgroundColor: colors.backgroundColor, color: "#ffffff"}}>
            <Typography variant='h3'>Play Record</Typography>
            <div className={styles.PlayRecordLayout}>
                <Card className={styles.PlayRecordCounter}>
                    <Typography variant='h2'>{props.days}</Typography>
                    <Typography>Days</Typography>
                </Card>
                <Card className={styles.PlayRecordCounter}>
                    <Typography variant='h2'>{props.hours}</Typography>
                    <Typography>Hours</Typography>
                </Card>
                <Card className={styles.PlayRecordCounter}>
                    <Typography variant='h2'>{props.minutes}</Typography>
                    <Typography>Minutes</Typography>
                </Card>
                <Card className={styles.PlayRecordCounter}>
                    <Typography variant='h2'>{props.seconds}</Typography>
                    <Typography>Seconds</Typography>
                </Card>
            </div>
        </Card>
    );
}

export default PlayRecord;