import { Message } from '@/interface/Chat';
import { addMessageAction } from '../../actions/addMessage';


interface messageQueueState {
  currentMessageQueue: Message[];
}

const initialState: messageQueueState = {
  currentMessageQueue: [],
};

const messageQueueReducer = (state = initialState, action: addMessageAction): messageQueueState => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return { ...state, currentMessageQueue: [...state.currentMessageQueue, action.payload] };
    default:
      return state;
  }
};

export default messageQueueReducer;
