import WebSocket from 'ws';

export const setWebSocket = (ws: WebSocket) => ({
    type: 'SET_WEBSOCKET',
    payload: ws,
});

export type SetWebSocketAction = ReturnType<typeof setWebSocket>;