import { Message } from '@/interface/Chat';

export const addMessage = (msg: Message) => ({
    type: 'ADD_MESSAGE',
    payload: msg,
});

export type addMessageAction = ReturnType<typeof addMessage>;