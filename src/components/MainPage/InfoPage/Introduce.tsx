import { RootState } from "@/states/store/store";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Divider, Paper, List, ListItem, ListItemAvatar, ListItemText, Avatar, Box, ListItemButton} from '@mui/material';

const Introduce = () => {
    return (
        <Box sx ={{
            color: 'black',
            border: 1,
            borderRadius: 6,
            boxShadow: 5,
            height: 300,
            width: 150
        }}>
            <List>
                <ListItem>
                    111
                </ListItem>
            </List>
        </Box>
    )
}

export default Introduce;