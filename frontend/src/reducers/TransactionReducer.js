import  {ALL_TRANSACTION_SUCCESS} from '../constants/constant'


export const transaction_reducer = (state = {transactions:[]}, action) => {
    switch(action.type) {
        case ALL_TRANSACTION_SUCCESS:
            return {
                loading:false,
                transactions:action.payload
            }
        default:
            return state
    }
}