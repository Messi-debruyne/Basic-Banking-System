import {ALL_TRANSACTION_SUCCESS} from '../constants/constant'
import axios from 'axios'

export const getTransaction = () => async(dispatch) => {
    let link = 'http://localhost:1234/transaction/all';
    const {data} = await axios.get(link)
    dispatch({type:ALL_TRANSACTION_SUCCESS, payload:data.alltransactions})
}

export const updateamount = (email='',newamount=0) => async(dispatch) => {
    let link = `http://localhost:1234/users/updateamount?email=${email}&newamount=${newamount}`
    await axios.post(link)
}


export const createTransaction = (sender='',receiver='',amount=0) => async(dispatch) => {
        let link = `http://localhost:1234/transaction/create?sender=${sender}&receiver=${receiver}&amount=${amount}`
        await axios.post(link)
        console.log('hello')
}