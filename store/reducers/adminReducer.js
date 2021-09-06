import {
    GET_ADMINS
  } from '../types/adminTypes'

  const initialState = {
    admins: [],
    admin: {}
  }

  const adminReducer = (state = initialState, action) => {
    const { type, payload } = action
  
    switch (type) {
      case GET_ADMINS:
        return {
          ...state,
          admins: payload,
        }

      default:
        return state
    }
  }
  
  export default adminReducer