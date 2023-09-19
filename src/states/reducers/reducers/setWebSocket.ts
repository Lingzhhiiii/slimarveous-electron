import { SetWebSocketAction } from '../../actions/setWebSocket';
import WebSocket from 'ws';

interface WebSocketState {
  currentWebSocket:  WebSocket | null;
}

const initialState: WebSocketState = {
  currentWebSocket: null,
};

const setWebSocketReducer = (state = initialState, action: SetWebSocketAction): WebSocketState => {
  switch (action.type) {
    case 'SET_WEBSOCKET':
      return { ...state, currentWebSocket: action.payload };
    default:
      return state;
  }
};

export default setWebSocketReducer;
