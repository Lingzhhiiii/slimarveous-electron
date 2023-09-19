import BottomNav from "./BottomNav";
import ChatPage from "./ChatPage";
import InfoPage from "./InfoPage";
import { WsConn } from "@/Websocket";
import { useState, useEffect } from 'react';
import sendRequest from "@/Network";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/states/store/store'; 
import { User } from '@/interface/Auth';
import { GetFrdListResp } from '@/interface/Friend';
import { FriendListInfo } from '@/components/MainPage/ChatPage/FriendList';
import { setFrdList } from "@/states/actions/setFrdList";


const Page = (props: {pg: number} ) => {
    switch (props.pg) {
        case 0:
            return ( <><ChatPage /></> );
        case 1: 
            return ( <><InfoPage /></>);
        case 2: 
            return (<><InfoPage /></>);
        default:
            return (<><InfoPage /></>);
    }
}

const MainPage = () => {
    WsConn();
    const [bottomNavValue, setBottomNavValue] = useState<number>(1);

    const handleBottomNavValueChange = (newValue: number) => {
      setBottomNavValue(newValue);
    };

    const user: User = useSelector((state: RootState) => state.currentUser.currentUser);
    const dispatch = useDispatch();

    useEffect(()=>{
      sendRequest('/slimarveous/get_friend_list', {
            id: user.id,
            token: user.password,
        }).then((response) => {
        if (response.success) {
            const getFrdListResp: GetFrdListResp = response.data;
            const friends: FriendListInfo[] = [];
            getFrdListResp.friends.forEach((fd) => {
            const { id, username, photo } = fd;
            friends.push({ friendName: username, friendId: id, friendPhoto: photo});
            });
            dispatch(setFrdList(friends));
        } else {
            console.error('error:', response.error);
        }
        });  
    }, []);

    return (
        <>
            <Page pg={bottomNavValue} />
            <BottomNav onValueChange={handleBottomNavValueChange} />
        </>
    )
}

export default MainPage;