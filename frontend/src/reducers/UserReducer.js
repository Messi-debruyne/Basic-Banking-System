import  {ALL_USER_REQUREST,ALL_USER_SUCCESS} from '../constants/constant'


export const user_reducer = (state = {users:[]}, action) => {
    switch(action.type) {
        case ALL_USER_SUCCESS:
            return {
                loading:false,
                users:action.payload
            }
        default:
            return state
    }
}