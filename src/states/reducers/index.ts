// reducers/index.js
import { combineReducers } from 'redux';
import fdSelectedReducer from './reducers/fdSelected';
import setWebSocketReducer from './reducers/setWebSocket';
import messageQueueReducer from './reducers/messageQueue';
import setCurrentUserReducer from './reducers/setCurrentUser';
import getFrdListReducer from './reducers/getFrdList';

const rootReducer = combineReducers({
  fdSelected: fdSelectedReducer,
  setWebSocket: setWebSocketReducer,
  messageQueue: messageQueueReducer,
  currentUser: setCurrentUserReducer,
  FrdList: getFrdListReducer,
  // other reducers can be added here
});

export default rootReducer;
