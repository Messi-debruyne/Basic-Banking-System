import React , {useEffect,useState}from 'react'
import './style/Transfer.css'
import {updateamount,createTransaction} from '../actions/TransactionAction'
import {useSelector,useDispatch} from 'react-redux'
import { getUser } from '../actions/UserAction'
import { useLocation } from 'react-router-dom'
import {useHistory} from 'react-router-dom'


const Transfer = () => {

    const dispatch = useDispatch()
    const {users} = useSelector(state => state.users)
    const [amount, setamount] = useState(0)
    const [email, setemail] = useState('')
    const [senderName, setsenderName] = useState('')
    const history = useHistory()

    const location = useLocation()
    console.log(location)

    useEffect(()=>{
        dispatch(getUser())
      },[dispatch])



    

    const finalTransfer2 = () => {
        dispatch(createTransaction(senderName,email,amount))
        dispatch(updateamount(senderName,-amount))
        dispatch(updateamount(email,amount))
        history.push('/transaction')
    }

  return (
    <div>
        <div className="transfercontainer">
            <form > 

                <label htmlFor="transferto">Transfer From : </label>
                <select id='transferto' onChange={(e) => {setsenderName(e.target.value)}} >
                    {users.map(user => (
                        <option  value={user.email}>{user.email}</option>
                    ))}
                </select>

                <label htmlFor="amount">Enter Amount : </label>
                <input type="text" id='amount'  onChange={(e) => setamount(e.target.value)} />
                <label htmlFor="transferto">Transfer To : </label>
                <select id='transferto' onChange={(e) => {setemail(e.target.value)}} >
                    {users.map(user => (
                        <option  value={user.email}>{user.email}</option>
                    ))}
                </select>
                <button className='finalTransfer' onClick={finalTransfer2}>TRANSFER</button>
            </form>
        </div>
    </div>
  )
}

export default Transfer