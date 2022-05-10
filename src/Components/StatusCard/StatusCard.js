import { Typography, Card, Divider, List, ListItem } from '@mui/material';
import styles from './StatusCard.module.scss';
import colors from '../../Styles/_color.scss';

const StatusCard = (props) => {
    return (
        <Card className={styles.StatusCard} sx={{backgroundColor: colors.backgroundColor, color: "#ffffff"}}>
            <Typography variant='h4'>{props.name}</Typography>
            <List>
                <ListItem className={styles.StatusListItem}>
                    <Card className={styles.StatusLabel}>
                        <Typography>Gender </Typography>
                    </Card>
                    <Typography>{props.gender}</Typography>
                </ListItem>
                <Divider />
                <ListItem className={styles.StatusListItem}>
                    <Card className={styles.StatusLabel}>
                        <Typography>Age </Typography>
                    </Card>
                    <Typography>{props.age}</Typography>  
                </ListItem>
                <Divider />
                <ListItem className={styles.StatusListItem}>
                    <Card className={styles.StatusLabel}>
                        <Typography>Birthday</Typography>
                    </Card>
                    <Typography>{props.birthday}</Typography>
                </ListItem>
                <Divider />
                <ListItem className={styles.StatusListItem}>
                    <Card className={styles.StatusLabel}>
                        <Typography>Height </Typography>
                    </Card>
                    <Typography>{props.height}</Typography>
                </ListItem>
            </List>
        </Card>
    )
}

export default StatusCard;