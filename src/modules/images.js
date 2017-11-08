import fetch from 'isomorphic-fetch';

const REQUEST_IMAGE = 'app/images/REQUEST_IMAGE';
const RECEIVE_IMAGE = 'app/images/RECEIVE_IMAGES';

const defaultState = {
    loading: false,
    image: null,
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case RECEIVE_IMAGE:
            return { ...state, loading: false, image: action.image };
        case REQUEST_IMAGE:
            return { ...state, loading: true };
        default:
            return state;
    }
}

export const requestImageData = () => ({ type: REQUEST_IMAGE });

export const receiveImageData = image => (
    {
        type: RECEIVE_IMAGE,
        image,
    }
);

/* 
    Returning a function from an action creator requires the use of redux-thunk. Using this,
    you're able to dispatch multiple actions within a single action creator and deal with
    async calls (such as fetch).
*/
export const getUserImage = userId => (
    (dispatch) => {
        dispatch(requestImageData());

        fetch(`https://jsonplaceholder.typicode.com/photos?id=${userId}`).then(response => (
            response.json()
        )).then((json) => {
            dispatch(receiveImageData(json[0]));
        });
    }
);
