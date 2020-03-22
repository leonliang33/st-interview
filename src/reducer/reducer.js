import {DOWNLOAD_DATA} from '../action/actionTypes';

const initialState = {
    data: []
};

function rootReducer(state = initialState, action) {
    if (action.type === DOWNLOAD_DATA) {
        state.data = action.payload
    }
    return state;
};

export default rootReducer;