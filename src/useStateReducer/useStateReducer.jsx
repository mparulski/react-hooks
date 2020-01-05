import React from 'react'

const useStateReducer = (reducer = (state) => state, initialState = void 0, stateReducer = (state, action) => action.changes) => {
  const [state, setState] = React.useState(initialState)

  const dispatch = (action) => {
    const reducerChanges = reducer(state, action)
    const stateReducerChanges = stateReducer(state, {...action, changes: reducerChanges})

    setState(stateReducerChanges)
  }

  return [state, dispatch]
}

export {
  useStateReducer
}