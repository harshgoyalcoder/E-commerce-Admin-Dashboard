import styled from '@emotion/styled';
import { Mail, Notifications, Pets, Settings } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  color: #ffffff; /* Set the text color */

`;


const StyledIcons=styled(Box)`
 display: flex;
 gap: 20px;
 align-items: center;
`

export default function Topbar() {
  const [open, setOpen] = useState(false);
  return (
   <AppBar position='sticky' >
 
  <StyledToolbar>
    <Typography variant="h6" >
     Admin Dashboard
    </Typography>
    <StyledIcons  >
      <IconButton color="inherit">
        <Badge badgeContent={3} color="secondary">
          <Notifications />
        </Badge>
      </IconButton>
      <IconButton color="inherit">
        <Badge badgeContent={2} color="secondary">
          <Mail />
        </Badge>
      </IconButton>
      <IconButton color="inherit">
          <Settings />
      </IconButton>
     
      <IconButton color="inherit" onClick={(e) => setOpen(true)}>
        <Avatar  alt="User Avatar" src="/avatar.jpg" />
      </IconButton>
    </StyledIcons>
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
  </StyledToolbar>
   </AppBar>

  )
}
