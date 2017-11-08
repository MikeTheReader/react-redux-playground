import { combineReducers } from 'redux';
import UserReducer from './users';
import ImagesReducer from './images';

const rootReducer = combineReducers({
    users: UserReducer,
    images: ImagesReducer,
});

export default rootReducer;
