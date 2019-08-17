import * as webService from '../api/web-services';
import * as types from "../config/constants/action-types";

//------------------------------
export const getBottomTabularDataResult = (payload) => ({
    type: types.GET_BOTTOM_TABULAR_DATA,
    payload: payload
});

export const getBottomTabularData = () => dispatch => {
    webService.getBottomTabularData()
        .then((res) => {
            if (res.status === 200) {
                if (res.data && res.data.success) {
                    dispatch(getBottomTabularDataResult(res.data.success))
                }
            }
        });
};
//------------------------------
export const getTopTabularDataResult = (payload) => ({
    type: types.GET_TOP_TABULAR_DATA,
    payload: payload
});

export const getTopTabularData = () => dispatch => {
    webService.getTopTabularData()
        .then((res) => {
            if (res.status === 200) {
                if (res.data && res.data.success) {
                    dispatch(getTopTabularDataResult(res.data.success))
                }
            }
        });
};
//------------------------------
export const setNewItemToBottomTabular = (payload) => ({
    type:types.SET_NEW_BOTTOM_TABULAR_ITEM,
    payload:payload
})

export const setVisibleStatusTopTabular = (payload) => ({
    type:types.SET_VISIBLE_STATUS_TOP_TABULAR_DATA,
    payload:payload
})

