import { useEffect, useState, useRef } from 'react';
import { Divider, Paper, List, ListItem, ListItemAvatar, ListItemText, Avatar, Box, ListItemButton } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { User } from '@/interface/Auth';

import { useSelector, useDispatch } from 'react-redux';
import { setFdSelected } from '@/states/actions/fdSelected';

export interface FriendListInfo {
    friendName: string;
    friendId: number;
    friendPhoto: string;
}
  
function FriendList(props: { friends: FriendListInfo[] }) {

  const dispatch = useDispatch();

  const [selectedIndex, setSelectedIndex] = useState<number>();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.ownerDocument.body.scrollTop = 0;
    }
  }, []);

  const handleListButtonClick = (
    index: number,
    fd: FriendListInfo
      ) => {
        setSelectedIndex(index);
        dispatch(setFdSelected(fd));
  }

    return (
      <Box sx={{ pb: 7 }} ref={ref}>
        <CssBaseline />
        <List sx={ListSx} disablePadding >
          {props.friends.map(({ friendName, friendId, friendPhoto }, index) => (
            <ListItem key={index}>
              <ListItemButton 
                selected={selectedIndex === index}
                onClick={()=>{ handleListButtonClick(index, { friendName, friendId, friendPhoto }) }}>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={friendPhoto} />
                </ListItemAvatar>
                <ListItemText primary={friendName} secondary={friendId} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }

export default FriendList;

const ListSx = {
  width: '100%',
  bgcolor: 'background.paper',
  position: 'relative',
  overflow: 'auto',
  maxHeight: 500,
  '& ul': { padding: 0 },
} as const;
