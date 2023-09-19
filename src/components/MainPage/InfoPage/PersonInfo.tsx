import { RootState } from '@/states/store/store';
import { Divider, Paper, List, ListItem, ListItemAvatar, ListItemText, Avatar, Box, ListItemButton} from '@mui/material';
import TextField from '@mui/material/TextField';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

const PersonInfo = () => {
    const user = useSelector((state: RootState) => state.currentUser.currentUser);
    const info = {
        username: user.username,
        id: user.id.toString(),
        birthday: user.birthday,
        gender: user.gender.toString()
    }
    return (
        <Box>
            <List>
            {(Object.keys(info) as Array<keyof typeof info>).map(key => {
                const label = key;
                const value = info[key];

                return (
                <ListItem key={key}>
                    <TextField
                    label={label}
                    defaultValue={value}
                    InputProps={{
                        readOnly: true,
                    }}
                    />
                </ListItem>
                );
            })}
            </List>
        </Box>
    )
}

export default PersonInfo;