import { makeStyles } from '@mui/styles'

export const useStylesDirectory = makeStyles(() => ({
  files: {
    height: 'calc(93vh - 0px)',
    overflowY: 'scroll'
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

  titleAndDelete: {
    display: 'flex',
    justifyContent: 'space-between'
  }

}))