import {
    GET_CLIENTS
  } from '../types/clientTypes'

  const initialState = {
    sortedClients: []
  }

  const clientReducer = (state = initialState, action) => {
    const { type, payload } = action
  
    switch (type) {
      case GET_CLIENTS:
        return {
          ...state,
          sortedClients: payload,
        }

      default:
        return state
    }
  }
  
  export default clientReducer