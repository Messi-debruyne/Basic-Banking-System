import React, {useEffect} from 'react'
import './style/User.css'
import {getTransaction} from '../actions/TransactionAction'
import {useSelector,useDispatch} from 'react-redux'

function User() {
  const dispatch = useDispatch()
  const {transactions} = useSelector(state => state.transaction)

  console.log('hello')
  console.log(transactions)
  console.log('bye')

  useEffect(()=>{
    dispatch(getTransaction())
  },[dispatch])


  return (
      <div className="container">
            <div className="table">
        <div class="table-title">   
</div>
<table class="table-fill">
<thead>
<tr>
<th class="text-left">SENDER</th>
<th class="text-left">RECEIVER</th>
<th class="text-left">AMOUNT</th>
</tr>
</thead>
<tbody class="table-hover">



{transactions.map((transt) => (
  <tr>
  <td class="text-left">{transt.sender}</td>
  <td class="text-left">{transt.receiver}</td>
  <td class="text-left">$ {transt.amount}</td>
  </tr>
))}


</tbody>
</table>
        </div>
      </div>
  )
}

export default User