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
  },

  foldersComponent: {
    display: 'flex',
    padding: '5px',
    cursor: 'pointer',
    '&:hover': {
      background: '#ddd'
    }
  },

}))

