import { Divider, Paper, List, ListItem, ListItemAvatar, ListItemText, Avatar, Box, ListItemButton } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useState } from 'react';

interface BottomNavigationProps {
    onValueChange: (value: number) => void;
}

const BottomNav: React.FC<BottomNavigationProps> = ({onValueChange}) => {  
  const [value, setValue] = useState<number>(1);
    
  return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
            <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
                onValueChange(newValue);
            }}
            >
                <BottomNavigationAction label="Chat" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Info" icon={<FavoriteIcon />}  />
                <BottomNavigationAction label="Friends" icon={<ArchiveIcon />} />
            </BottomNavigation>
        </Paper>
    )
}

export default BottomNav;
