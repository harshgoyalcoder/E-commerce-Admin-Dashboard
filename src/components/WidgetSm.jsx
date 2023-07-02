import styled from '@emotion/styled'
import { Visibility } from '@mui/icons-material';
import { Avatar, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {userRequest} from "../requestMethods"

const StyledBox=styled(Box)`
    /* flex: 2; */
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    margin-right: 20px;
`;
export default function WidgetSm() {

  const [users,setUsers]=useState([]);
  useEffect(()=>{
    const getUsers=async()=>{
      try{
        const res=await userRequest.get("users/?new=true");
        //it will display only 2 new users
        setUsers(res.data);

      }catch{}

      };
      getUsers();
  },[]);

  return (
    <StyledBox>
      <Typography variant='h5'>New Join Members</Typography>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

        {users.map((user)=>(
          <ListItem alignItems="flex-start" key={user._id}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={user.img || "../air.png"} />
        </ListItemAvatar>
        <ListItemText
          primary={user.username}
          secondary="Software Developer"
        />
        <Button variant="outlined" startIcon={<Visibility/>}>Display</Button>
        <Divider variant="inset" component="li" />
      </ListItem>
        ))}
    
    </List>
    </StyledBox>
  )
}
