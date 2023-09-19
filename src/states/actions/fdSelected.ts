import { FriendListInfo } from "@/components/MainPage/ChatPage/FriendList";

export const setFdSelected = (fd: FriendListInfo) => ({
    type: 'SET_FD_SELECTED',
    payload: fd,
});

export type FdSelectedAction = ReturnType<typeof setFdSelected>;