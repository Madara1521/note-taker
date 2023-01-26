import { makeStyles } from '@mui/styles'

export const useStylesDirectory = makeStyles(() => ({
  files: {
    height: 'calc(93vh - 70px)',
  },

  fileComponent: {
    display: 'flex',
    padding: '5px',
    cursor: 'pointer',
    '&:hover': {
      background: '#ddd'
    }
  },

}))