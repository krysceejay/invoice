import {
    LOGIN_SUCCESS,
    LOGOUT
  } from '../types/authTypes'

  const initialState = {
    token: null,
    isAuthenticated: null,
    loading: true,
    authUser: null
  }

  const authReducer = (state = initialState, action) => {
    const { type, payload } = action
  
    switch (type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false
        }

      case LOGOUT:
        return {
          ...state,
          token: null,
          isAuthenticated: null,
          authUser: null
        }

      default:
        return state
    }
  }
  
  export default authReducer