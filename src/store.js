import { createStore } from 'redux';
import rootReducer from './reducers';

export default(initialState={users:[]}) => {
    return createStore(rootReducer, initialState);
};