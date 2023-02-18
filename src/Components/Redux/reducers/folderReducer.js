import { ADD_FOLDER, DELETE_FOLDER, TITLE_UPDATE } from '../types'

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
    case TITLE_UPDATE:
      const { data } = action
      const { folder } = state
      const itemIndex = folder.findIndex(res => res.id === data.id)

      const nextFolder = [
        ...folder.slice(0, itemIndex),
        data,
        ...folder.slice(itemIndex + 1)
      ]
      return {
        ...state,
        folder: nextFolder
      }
    case DELETE_FOLDER:
      return (() => {
        const { id } = action
        const { folder } = state
        const itemIndex = folder.findIndex(res => res.id === id)

        const nextFolder = [
          ...folder.slice(0, itemIndex),
          ...folder.slice(itemIndex + 1)
        ]
        return {
          ...state,
          folder: nextFolder
        }
      })()

    default:
      return state
  }
}


