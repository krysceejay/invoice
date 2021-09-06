import {
    NOTIFY
  } from '../types/notifyTypes'

  const initialState = {
    notify: {}
  }

  const notificationReducer = (state = initialState, action) => {
    const { type, payload } = action
  
    switch (type) {
    case NOTIFY:
        return {
            ...state,
            notify: payload
        }

      default:
        return state
    }
  }
  
  export default notificationReducer