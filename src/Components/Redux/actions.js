import { ADD_FOLDER, DELETE_FOLDER, INPUT_TITLE_FOLDER} from './types'

export function addFolders() {
  return {
    type: ADD_FOLDER
  }
}

export function deleteFolders() {
  return {
    type: DELETE_FOLDER
  }
}

export function inputTitleFolder(title) {
  return {
    type: INPUT_TITLE_FOLDER,
    title
  }
}