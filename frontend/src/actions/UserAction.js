import {ALL_USER_REQUREST,ALL_USER_SUCCESS} from '../constants/constant'
import axios from 'axios'

export const getUser = () => async(dispatch) => {
    let link = 'http://localhost:1234/users/all';
    const {data} = await axios.get(link)
    console.log(data)
    dispatch({type:ALL_USER_SUCCESS, payload:data.users})
}
