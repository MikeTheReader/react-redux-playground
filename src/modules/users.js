import fetch from 'isomorphic-fetch';

const REQUEST_USERS = 'app/users/REQUEST_USERS';
const RECEIVE_USERS = 'app/users/RECEIVE_USERS';
const SELECT_USER = 'app/users/SELECT_USERS';

const defaultState = {
    loading: false,
    users: [],
    selectedUser: null,
    selectionHistory: [],
};

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        // eslint-disable-next-line
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return { ...state, loading: false, users: action.data };
        case REQUEST_USERS:
            return { ...state, loading: true };
        case SELECT_USER:
            return {
                ...state,
                selectedUser: action.user,
                selectionHistory: [action.user, ...state.selectionHistory],
            };
        default:
            return state;
    }
}

export const requestUserData = () => (
    {
        type: REQUEST_USERS,
    }
);

export const receiveUserData = data => (
    {
        type: RECEIVE_USERS,
        data,
    }
);

export const selectUser = user => (
    {
        type: SELECT_USER,
        user: { ...user, historyId: uuidv4() },
    }
);

/* 
    Returning a function from an action creator requires the use of redux-thunk. Using this,
    you're able to dispatch multiple actions within a single action creator and deal with
    async calls (such as fetch).
*/
export const initializeUserData = () => (
    (dispatch) => {
        dispatch(requestUserData());

        fetch('https://jsonplaceholder.typicode.com/users').then(response => (
            response.json()
        )).then((json) => {
            dispatch(receiveUserData(json));
        });
    }
);
