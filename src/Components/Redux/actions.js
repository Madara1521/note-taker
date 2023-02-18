import { ADD_FOLDER, DELETE_FOLDER, TITLE_UPDATE } from './types'

export function addFolders(title,id) {
  return {
    type: ADD_FOLDER,
    data: {title,id}
  }
}

export function titleUpdate(title, id) {
  return {
    type: TITLE_UPDATE,
    data: {title,id}
  }
}

export function deleteFolders(id) {
  return {
    type: DELETE_FOLDER,
    id
  }
}



