import uuid from 'react-uuid'
import { ADD_FOLDER, DELETE_FOLDER, INPUT_TITLE_FOLDER } from '../types'

const initialState = {
  folder: [],
  id: uuid(),
  title: 'Untitled folder'
}

export const folderReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_FOLDER:
      return {
        ...state,
        id: state.id
      }
    case DELETE_FOLDER:
      return {
        ...state,
        id: state.id
      }
    case INPUT_TITLE_FOLDER:
      return {
        ...state,
        title: action.title
      }
    default:
      return state
  }
}


