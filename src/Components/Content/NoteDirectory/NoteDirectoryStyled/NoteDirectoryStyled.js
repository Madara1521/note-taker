import { makeStyles } from '@mui/styles'

export const useStylesDirectory = makeStyles(() => ({
  files: {
    height: 'calc(93vh - 70px)',
  },

  fileComponent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '5px',
    cursor: 'pointer',
    '&:hover': {
      background: '#ddd'
    }
  },

}))