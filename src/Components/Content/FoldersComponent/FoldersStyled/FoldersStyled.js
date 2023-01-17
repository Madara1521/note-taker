import { makeStyles } from '@mui/styles'


export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
  },
  folders: {
    overflowY: 'scroll',
    height: 'calc(93vh - 70px)',
  },
  fileComponent: {
    display: 'flex',
    padding: '5px',
    cursor: 'pointer'
  }

}))

