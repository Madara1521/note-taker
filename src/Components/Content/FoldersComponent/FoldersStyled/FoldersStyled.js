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
    padding: '3px',
    cursor: 'pointer',
    justifyContent: 'space-between',
    '&:hover': {
      background: '#ddd'
    }
  },
  inputs: {
    width: '100%',
    border: '0',
    padding: '5px 0',
    borderBottom: '1px solid #f2f2f2',
    outline: 'none',
    resize: 'vertical'
  },
  iCloud: {
    display: 'flex',
  }
}))

