import styled from '@emotion/styled';
import { CalendarToday, LocationSearching, MailOutline, MailOutlineOutlined, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import { Avatar, Box, TextField, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import React from 'react'

const StyledBox1=styled(Box)`
   flex: 1;
    padding: 20px;
    /* margin: 10px; */
    height: 30rem;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const StyledBox2=styled(Box)`
   flex: 2;
   display: flex;
   justify-content: space-around;
    padding: 20px;
    height: 30rem;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export default function User() {
  return (

    <div style={{flex:4,display:"flex",marginTop:"80px", marginRight:"50px",gap:"40px" }}>
   <StyledBox1> 
    <Box sx={{display:"flex"}}>
     <Avatar  sx={{width:"45px",height:"45px", marginRight:"10px" }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
     <Typography variant='h5'>Anna Becker</Typography>
    </Box>
     <Typography variant='h6' sx={{ marginBottom:"5px",marginTop:"-15px",marginLeft:"50px" ,color:"rgb(175, 170, 170)"}}>Software Developer</Typography>
    <Box sx={{margin:"10px" ,gap:"15px",display:"flex",flexDirection:"column"}}>
     <Typography variant='h7' sx={{color:"rgb(175, 170, 170)"}}>Account Details</Typography>
     <Typography sx={{display:"flex",alignItems:"center" ,}} variant='h7'><PermIdentity sx={{margin:"5px"}} />annabeck99</Typography>
     <Typography sx={{display:"flex",alignItems:"center" ,}} variant='h7'><CalendarToday  sx={{margin:"5px"}}/>10.12.1999</Typography>
     <Typography variant='h7' sx={{ color:"rgb(175, 170, 170)"}}>Contact Details</Typography>
     <Typography sx={{display:"flex",alignItems:"center" ,}} variant='h7'><PhoneAndroid  sx={{margin:"5px"}}/>  +1 123 456 67</Typography>
     <Typography sx={{display:"flex",alignItems:"center" ,}} variant='h7'><MailOutlineOutlined  sx={{margin:"5px"}}/>annabeck99@gmail.com</Typography>
     <Typography sx={{display:"flex",alignItems:"center" ,}} variant='h7'> <LocationSearching  sx={{margin:"5px"}}/>New York | USA</Typography>
     </Box>
     </StyledBox1>
   <StyledBox2> 
    <Box sx={{display:"flex",flexDirection:"column", alignItems:"baseline"}}>
    
     <Typography variant='h5'>EDIT USER</Typography>
      
      <TextField sx={{margin:1 , width:"20rem"}} id="outlined-basic" label="username" variant="outlined" />
      <TextField  sx={{margin:1, width:"20rem"}} id="outlined-basic" label="Full Name" variant="outlined" />
      <TextField  sx={{margin:1, width:"20rem"}} id="outlined-basic" label="Email" variant="outlined" />
      <TextField  sx={{margin:1, width:"20rem"}} id="outlined-basic" label="Phone" variant="outlined" />
      <TextField  sx={{margin:1, width:"20rem"}} id="outlined-basic" label="Address" variant="outlined" />
    
    </Box>

    <Box sx={{display:"flex" , marginTop:"40px", marginLeft:"10px"}}>
      <img style={{width:"100px", height:"100px",borderRadius:"10px" , objectFit:"cover",marginRight:"20px"}} alt="" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <label htmlFor="file">
        <Publish sx={{marginTop:"50px"}} />
        </label>  
        <input type="file" id="file" style={{ display: "none" }} />
    </Box>
     
     </StyledBox2>
     </div>
  )
}
