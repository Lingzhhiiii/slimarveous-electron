// store/store.js
import { legacy_createStore } from 'redux';
import rootReducer from '../reducers';

export type RootState = ReturnType<typeof rootReducer>;

const store = legacy_createStore(rootReducer);

export default store;

