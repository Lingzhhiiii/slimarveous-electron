import { setFrdListAction } from '../../actions/setFrdList';
import { FriendListInfo } from "@/components/MainPage/ChatPage/FriendList";

interface frdListState {
  FrdList: FriendListInfo[];
}

const initialState: frdListState = {
  FrdList: [],
};

const getFrdListReducer = (state = initialState, action: setFrdListAction): frdListState => {
  switch (action.type) {
    case 'SET_FRD_LIST':
      return { ...state, FrdList: action.payload };
    default:
      return state;
  }
};

export default getFrdListReducer;
