import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material'

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
  }
}))

export const FileComponent = styled('div')(() => ({
  display: 'flex',
  padding: '5px'
}))
