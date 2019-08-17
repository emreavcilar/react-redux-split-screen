import {
    SET_HEADER_TO_SAVE_MODE
} from '../config/constants/action-types'

const initialState = {
    saveMode: false
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HEADER_TO_SAVE_MODE:
            return {
                ...state,
                saveMode: action.payload
            }
        default:
            return state;
    }
};

export default headerReducer;