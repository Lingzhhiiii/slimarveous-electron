import styles from '../../style/MainPage.module.scss';
import { useState, useEffect, useRef } from 'react';
import { Divider, Paper, List, ListItem, ListItemAvatar, ListItemText, Avatar, Box, ListItemButton} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/states/store/store';

const ChatMsgList = () => {
  const fd = useSelector((state: RootState) => state.fdSelected.selectedFriendInfo);
  const user = useSelector((state: RootState) => state.currentUser.currentUser);
  const messageQueue = useSelector((state: RootState) => state.messageQueue.currentMessageQueue);

  const filteredMessages = messageQueue.filter((msg) => {
    if (
      (user?.id === msg.receiver.id && msg.sender.id === fd.friendId) ||
      (user?.id === msg.sender.id && msg.receiver.id === fd.friendId)
    ) {
      return true;
    }
    return false;
  });

  return (
    <>
      {filteredMessages.map((msg, index) => (
        <ListItem key={index} divider >
          {user?.id === msg.receiver.id && msg.sender.id === fd.friendId ? (
            <>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={msg.sender.photo} />
              </ListItemAvatar>
              <ListItemText primary={`${msg.time} \t ${msg.sender.username}`} secondary={msg.content} />
            </>
          ) : (
            <>
              <ListItemText primary={`${msg.time} \t ${msg.sender.username}`} secondary={msg.content} sx={{mr: 0}} />
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={msg.sender.photo} />
              </ListItemAvatar>
            </>
          )}
        </ListItem>
      ))}
    </>
  );
};

const ChatArea = () => {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, []);

  return (
    <>
      <div className={styles.upper}>
        <Box sx={ChatAreaSx}>
        <CssBaseline />
        <List sx={ListSx} disablePadding component='ul' ref={listRef}>
            <ChatMsgList />
        </List>
        </Box>
      </div>
    </>
  )
}
export default ChatArea;

const ChatAreaSx = {
  bgcolor: 'background.paper',
  display: '',
  boxShadow: 5,
  borderRadius: 2,
  p: 2,
  minWidth: 300,
  minHeight: 300,
  width: '100%',
  height: 1,
  overflow: 'auto'
} as const;

const ListSx = {
  width: '100%',
  outerHeight: 1,
  bgcolor: 'background.paper',
  position: 'relative',
  overflow: 'auto',
  maxHeight: 350,
  '& ul': { padding: 0 },
} as const;
