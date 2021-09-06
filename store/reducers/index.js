import {combineReducers} from '../../utils/functions'
import clientReducer from './clientReducer'
import userReducer from './userReducer'

export default combineReducers(
    clientReducer,
    userReducer
)