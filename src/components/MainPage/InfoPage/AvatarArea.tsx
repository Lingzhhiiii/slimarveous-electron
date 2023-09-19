import { RootState } from "@/states/store/store";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Divider, Paper, List, ListItem, ListItemAvatar, ListItemText, Avatar, Box, ListItemButton} from '@mui/material';

const AvatarArea = () => {
    const user = useSelector((state: RootState) => state.currentUser.currentUser);

    return (
        <Box sx={{
            color:'black',
            border: 1,
            height: 150,
            width: 150,
            borderRadius: 6,
            boxShadow: 3
        }}>
            <List >
                <ListItem>
                    <Avatar src={user.photo} sx={{ width: 56, height: 56 }}/>
                </ListItem>
                <ListItem>
                    <Box>
                        {user.username}
                    </Box>
                </ListItem>
            </List>

        </Box>
    )
}

export default AvatarArea;