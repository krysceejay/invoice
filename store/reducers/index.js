import {combineReducers} from '../../utils/functions'
import clientReducer from './clientReducer'
import userReducer from './userReducer'
import authReducer from './authReducer'

export default combineReducers(
    clientReducer,
    userReducer,
    authReducer
)