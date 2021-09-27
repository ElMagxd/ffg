import { createStore } from 'redux';
import sortReducer from './reducers/sortReducer';

const store = createStore(sortReducer);
export default store;
