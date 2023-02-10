import { ADD_FOLDER, DELETE_FOLDER, INPUT_TITLE_FOLDER } from '../types'

const initialState = {
  folder: [],
  title: 'Untitled folder'
}

export const folderReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_FOLDER:
      return {
        ...state,
        folder: [...state.folder, action.data]
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


