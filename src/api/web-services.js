import axios from 'axios';

export const getBottomTabularData = () => {
    return axios.get('../assets/dummyData/bottomTabularData.json');
}

export const getTopTabularData = () => {
    return axios.get('../assets/dummyData/topTabularData.json'); 
}