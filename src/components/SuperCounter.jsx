import React from 'react'
import { legacy_createStore as createStore} from 'redux'

const actionIncremented = {
    type: 'incremented'
}

const actionDecremented = {
    type: 'decremented'
}

const actionReset = {
    type: 'reseted'
}

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'incremented': return state + 1
        case 'decremented': return state - 1
        case 'reseted': return 0
        default: return state
    }
}

export const store = createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const SuperCounter = () => {
  return (
    <div>
        <h2>{store.getState()}</h2>
        <button onClick={() => store.dispatch(actionIncremented)}>+1</button>
        <button onClick={() => store.dispatch(actionDecremented)}>-1</button>
        <button onClick={() => store.dispatch(actionReset)}>0</button>
    </div>
  )
}

export default SuperCounter