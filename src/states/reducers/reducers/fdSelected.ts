import { FdSelectedAction } from '../../actions/fdSelected';
import { FriendListInfo } from "@/components/MainPage/ChatPage/FriendList";

interface FdSelectedState {
  selectedFriendInfo: FriendListInfo;
}

const initialState: FdSelectedState = {
  selectedFriendInfo: {friendId: 0, friendName: '', friendPhoto: ''},
};

const fdSelectedReducer = (state = initialState, action: FdSelectedAction): FdSelectedState => {
  switch (action.type) {
    case 'SET_FD_SELECTED':
      return { ...state, selectedFriendInfo: action.payload };
    default:
      return state;
  }
};

export default fdSelectedReducer;
