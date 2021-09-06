import {createContext, useReducer} from 'react'
import rootReducer from './reducers'

export const DataContext = createContext({})

const initialState = {}

// context provider
export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState)
    return <DataContext.Provider value={{state, dispatch}}>{children}</DataContext.Provider>
}
  