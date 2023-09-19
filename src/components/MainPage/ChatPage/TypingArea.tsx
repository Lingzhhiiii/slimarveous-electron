import TextField from '@mui/material/TextField';
import { format } from 'date-fns';
import { Divider, Paper, List, ListItem, ListItemAvatar, ListItemText, Avatar, Box, ListItemButton} from '@mui/material';
import styles from '../../style/MainPage.module.scss';
import { useState, useEffect } from 'react';
import { Message } from '@/interface/Chat';
import { UserBrief } from '@/interface/Auth';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/states/store/store';
import { addMessage } from '@/states/actions/addMessage';
import { sendMsgToWebSocket } from '@/Websocket';

const TypingArea = () => {
    const fd = useSelector((state: RootState) => state.fdSelected.selectedFriendInfo)
    const ws = useSelector((state: RootState) => state.setWebSocket.currentWebSocket);
    const user = useSelector((state: RootState) => state.currentUser.currentUser);

    const dispatch = useDispatch();

    const [content, setContent] = useState('');

    const sendMessage = () => {
        if (content === '') { 
            console.log("content is empty");
            return;
        }
        setContent('');
        const currentDate = new Date();
        const formattedDate: string = format(currentDate, 'yyyy-MM-dd HH:mm');
        const msg: Message = {
                sender: { id: user.id, username: user.username, photo: user.photo, gender: user.gender},
                receiver: { id: fd?.friendId, username: fd?.friendName, photo: fd?.friendPhoto, gender: 1}, 
                time: formattedDate,
                type: "chat",
                content: content,
                is_photo: "0"
        };
        
        dispatch(addMessage(msg));
        if (ws != null) {
          sendMsgToWebSocket(msg, ws);
        }
    } 
    
    return (
        <div className={styles.lower}>
        <div className={styles.typing_bar}>
        <TextField
          id="text-area"
          sx={{maxHeight: 70, overflow: 'auto'}}
          multiline
          fullWidth
          size='medium'
          value={content}
          onChange={(e)=>{setContent(e.target.value)}}
        />
        </div>
        <div className={styles.btn_panel}>
          <button className={styles.btn} onClick={sendMessage}>Send</button>
          <button className={styles.btn} onClick={()=>{setContent('')}}>Clear</button>          
        </div>
      </div>
    )
}
export default TypingArea;