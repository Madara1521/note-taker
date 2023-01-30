import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
  },
  folders: {
    height: 'calc(93vh - 70px)',
    overflowY: 'scroll'
  },

  foldersComponent: {
    display: 'flex',
    padding: '5px',
    cursor: 'pointer',
    justifyContent: 'space-between',
    '&:hover': {
      background: '#ddd'
    }
  },

}))

