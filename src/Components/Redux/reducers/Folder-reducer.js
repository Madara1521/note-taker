import uuid from 'react-uuid'

const TITLE = 'TITLE'
const SET_TITLE = 'SET_TITLE'

let initialState = {
  folder: [
    {
      id: uuid(),
      title: 'Untitled folder'
    }
  ]

}

const FolderReducer = (state = initialState, action) => {
  switch (action.type) {
    case TITLE :
    return {
      ...state,
      folder: state.folder.map(f => {
        if(f.id === action.folderId) {
          return {
            ...f, title: '1 folder'
          }
        }
        return f
      })
    }
    case SET_TITLE: {
      return {...state,folder:[...state.folder,...action.folder]}
    }
    default:
      return state
  }
}

const setTitleAC = (folder) => ({type: SET_TITLE, folder})

export const Title = (folderId) = ({type:TITLE, folderId})

