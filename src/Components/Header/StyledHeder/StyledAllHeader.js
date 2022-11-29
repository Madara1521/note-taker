import { Box, styled, Toolbar } from '@mui/material'

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  border: '1px solid grey',
})

export const Search = styled(Box)(({ theme }) => ({
  display: 'none',
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius,
  padding: '3px',
  height: '30px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))

export const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  backgroundColor: 'white',
  color: 'grey',
  borderRadius: theme.shape.borderRadius,
  width: '50px',
  height: '30px',
  padding: '2px',
  justifyContent: 'center',
  border: '1px solid grey',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))

export const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))