import {
    GET_BOTTOM_TABULAR_DATA,
    SET_NEW_BOTTOM_TABULAR_ITEM,
    GET_TOP_TABULAR_DATA,
    SET_VISIBLE_STATUS_TOP_TABULAR_DATA
} from '../config/constants/action-types'

const initialState = {
    bottomTabularData: null,
    topTabularData: null
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOTTOM_TABULAR_DATA:
            return {
                ...state,
                bottomTabularData: [...action.payload]
            };
        case GET_TOP_TABULAR_DATA:
            return {
                ...state,
                topTabularData: { ...action.payload }
            };
        case SET_NEW_BOTTOM_TABULAR_ITEM:
            return {
                ...state,
                bottomTabularData: [...state.bottomTabularData, action.payload]
            };
        case SET_VISIBLE_STATUS_TOP_TABULAR_DATA:
            return {
                ...state,
                topTabularData: {
                    ...state.topTabularData,
                    props: state.topTabularData.props.map((item, index) => {
                        if (item.title === action.payload.title) {
                            return {
                                ...item,
                                selected: action.payload.selected
                            }
                        }
                        else{
                            return{
                                ...item
                            }
                        }
                    })
                }
            }
        default:
            return state;
    }
};

export default homeReducer;