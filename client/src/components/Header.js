import {
  AppBar,
  Button,
  Container,
  IconButton,
  ImageList,
  Toolbar,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.webp'
const Header = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img
            src={logo}
            alt="logo"
            style={{ width: 140, height: 70 , cursor:'pointer'}}
            onClick={() => handleClick()}
          />

          <Link underline="none" to="/form" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{ textDecoration: 'none' }}
              color="secondary"
            >
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
