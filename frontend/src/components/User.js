import React,{useEffect,useState} from 'react'
import './style/User.css'
import {getUser} from '../actions/UserAction'
import {updateamount} from '../actions/TransactionAction'

import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'




function User() {

  const dispatch = useDispatch()
  const {users} = useSelector(state => state.users)
  const [senderName, setsenderName] = useState('')


  useEffect(()=>{
    dispatch(getUser())
  },[dispatch])

  return (
      <div className="container">
            <div className="table">
        <div class="table-title">   
</div>
<table class="table-fill">
<thead>
<tr>
<th class="text-left">ID</th>
<th class="text-left">NAME</th>
<th class="text-left">EMAIL</th>
<th class="text-left">BALANCE</th>

</tr>
</thead>
<tbody class="table-hover">

{users.map((user) => (
<tr>
<td className="text-left">{user.id}</td>
<td className="text-left">{user.name}</td>
<td className="text-left">{user.email}</td>
<td className="text-left">$ {user.balance}</td>
</tr>
))}

</tbody>
</table>
  <div className="execute">
  <Link to='/transfer' >
  <button >Transfer</button>
  </Link>
  </div>
        </div>
      </div>
  )
}

export default User