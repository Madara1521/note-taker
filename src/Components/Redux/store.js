import { createStore } from 'redux'

const initialState = {
  title: 'Untitled folder'
}

const reducer = (state = initialState, action) => {
  console.log('reducer', action)

  return state
}

const store = createStore(reducer)

export default store