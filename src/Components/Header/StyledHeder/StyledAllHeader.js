import { Box, Button, styled, Toolbar } from '@mui/material'

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
})

export const Search = styled(Box)(({ theme }) => ({
  display: 'none',
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius,
  padding: '5px',
  height: '25px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))

export const Icons = styled(Button)(({ theme }) => ({
  display: 'none',
  backgroundColor: 'white',
  color: 'grey',
  borderRadius: theme.shape.borderRadius,
  width: '50px',
  height: '35px',
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