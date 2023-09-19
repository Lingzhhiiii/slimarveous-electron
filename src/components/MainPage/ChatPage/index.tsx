import styles from '../../style/MainPage.module.scss';
import { useEffect, useState, useRef } from 'react';
import FriendList from './FriendList';
import ChatArea from './ChatArea';
import TypingArea from './TypingArea';
import { FriendListInfo } from './FriendList';
import { useSelector } from 'react-redux';
import { RootState } from '@/states/store/store';

const Page = () => {
  const fds = useSelector((state:RootState) => state.FrdList.FrdList);

  return(
    <>  
      <div className={styles.sidebar}>
        <aside className={styles.sidebar__sidebar}>
          <FriendList friends={fds} />                 
        </aside>
        <main className={styles.sidebar__main}>
          <ChatArea />
          <TypingArea></TypingArea>
        </main>
      </div>
    </>
  )
}



const ChatPage = () => {

    return (
        <div>
            <Page></Page>
        </div>
    );
};

export default ChatPage;
