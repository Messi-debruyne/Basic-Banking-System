import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import {user_reducer} from './reducers/UserReducer'
import {transaction_reducer} from './reducers/TransactionReducer'


const initialState = {}

const reducer = combineReducers({
    users:user_reducer,
    transaction:transaction_reducer,

})

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store