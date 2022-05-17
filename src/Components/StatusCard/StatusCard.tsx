import { Typography, Card, Divider, List, ListItem } from '@mui/material';
import styles from './StatusCard.module.scss';
import colors from '../../Styles/_color.module.scss';

interface User {
    name: string,
    gender: string,
    age: number,
    birthday: string,
    height: number
}

const StatusCard = (props: User) => {
    return (
        <Card className={styles.StatusCard} sx={{backgroundColor: colors.mainColor, color: colors.textColor}}>
            <Typography variant='h4'>{props.name}</Typography>
            <List>
                <ListItem className={styles.StatusListItem}>
                    <Card className={styles.StatusLabel} sx={{backgroundColor: colors.lightColor, color: colors.textColor}}>
                        <Typography>Gender </Typography>
                    </Card>
                    <Typography>{props.gender}</Typography>
                </ListItem>
                <Divider />
                <ListItem className={styles.StatusListItem}>
                    <Card className={styles.StatusLabel} sx={{backgroundColor: colors.lightColor, color: colors.textColor}}>
                        <Typography>Age </Typography>
                    </Card>
                    <Typography>{props.age}</Typography>  
                </ListItem>
                <Divider />
                <ListItem className={styles.StatusListItem}>
                    <Card className={styles.StatusLabel} sx={{backgroundColor: colors.lightColor, color: colors.textColor}}>
                        <Typography>Birthday</Typography>
                    </Card>
                    <Typography>{props.birthday}</Typography>
                </ListItem>
                <Divider />
                <ListItem className={styles.StatusListItem}>
                    <Card className={styles.StatusLabel} sx={{backgroundColor: colors.lightColor, color: colors.textColor}}>
                        <Typography>Height </Typography>
                    </Card>
                    <Typography>{props.height} cm</Typography>
                </ListItem>
            </List>
        </Card>
    )
}

export default StatusCard;