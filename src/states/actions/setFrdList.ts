import { FriendListInfo } from "@/components/MainPage/ChatPage/FriendList";

export const setFrdList = (fds: FriendListInfo[]) => ({
    type: 'SET_FRD_LIST',
    payload: fds,
});

export type setFrdListAction = ReturnType<typeof setFrdList>;