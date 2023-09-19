import { useEffect, useState } from 'react';
import { Message, PullMsgQueue } from './interface/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { setWebSocket } from './states/actions/setWebSocket';
import { addMessage } from '@/states/actions/addMessage';
import { RootState } from './states/store/store';


export const WsConn= () => {

  const user = useSelector((state: RootState) => state.currentUser.currentUser); 

  const params = new URLSearchParams();
  params.append('id', user.id.toString());
  params.append('token', user.password);

  const url = 'ws://localhost:19999/slimarveous/ws?' + params.toString();

  const WebSocket = require('ws');

  const headers = {
    'Host': 'localhost:19999',
    'Origin': 'ws://localhost:19999',
  };

  const dispatch = useDispatch();
  
  useEffect(() => {
    const ws = new WebSocket(url, {
      headers: headers,
    });

    ws.on('open', () => {
      console.log('WebSocket connection opened');
      dispatch(setWebSocket(ws));
    });
    
    ws.on('message', (data: any) => {
      try {
        const message: PullMsgQueue | Message = JSON.parse(data);
        console.log('Received:', message);
        if (message['type'] == 'pull_chat') {
          const msg = message as PullMsgQueue
          const { uc_messages } = msg;

            uc_messages.forEach((message) => {
            dispatch(addMessage(message));
          });
        } else if (message['type'] == 'chat') {
          const msg = message as Message;
          dispatch(addMessage(msg));
        }  

      } catch (error) {
        console.error('Error parsing message:', error);
      }
    });
    
    
    ws.on('close', () => {
      console.log('WebSocket connection closed');
    });
    
    ws.on('error', (error: any) => {
      console.error('WebSocket error:', error);
    });

  }, []);
};

export const sendMsgToWebSocket = (msg: Message, ws: any) => {
  if (ws && ws.readyState === WebSocket.OPEN) {
    const data = JSON.stringify(msg);
    ws?.send(data);
  }
};

 

