import styled from '@emotion/styled'
import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, Home, Label, LineStyle, MailOutline, ModeNight, PermIdentity, Report, Shop, Storefront, Timeline, TimelineOutlined, TrendingUp, WorkOutline } from '@mui/icons-material'
import { Box, Chip, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
 const MainBox=styled(Box)`
    flex: 0.6;
    padding: 25px;
    align-content: center;
    background-color: rgb(251, 251, 255);

    /* -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.75); */
    /* box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.75); */
 `
export default function Sidebar({setMode,mode}) {
  return (
    <MainBox   >
      <Box>
        <Typography variant='h7' sx={{color:"gray"}}>Dashboard</Typography>
        <Box  sx={{margin:"14px",display:"flex",gap:"7px", flexDirection:"column"}}>
         <Link to="/">
          <Chip  sx={{cursor:"pointer",width:"130px",height:"27px",fontSize:"13px",padding:"8px"}} icon={<LineStyle/>}  label="Home" variant="filled" />
         </Link>
          <Chip sx={{width:"130px",height:"27px",fontSize:"13px",padding:"8px"}} icon={<Timeline/>}  label="Analytics" variant="filled" />
          <Chip sx={{width:"130px",height:"27px",fontSize:"13px",padding:"8px"}} icon={<TrendingUp/>}  label="Sales" variant="filled" />
        </Box>
      </Box>
      <Box>
        <Typography variant='h7' sx={{color:"gray"}}>Quick Menu</Typography>
        <Box  sx={{margin:"14px",display:"flex",gap:"7px", flexDirection:"column"}}>
          <Link to="/users">
          <Chip sx={{cursor:"pointer",width:"130px",height:"27px",fontSize:"13px",padding:"8px"}} icon={<PermIdentity/>}  label="Users" variant="filled" />
          </Link>

          <Link to="/products">
          <Chip sx={{cursor:"pointer",width:"130px",height:"27px",fontSize:"13px",padding:"8px"}} icon={<Storefront/>}  label="Products" variant="filled" />
          </Link>
       
          <Chip sx={{width:"130px",height:"27px",fontSize:"13px",padding:"8px"}} icon={<AttachMoney/>}  label="Transactions" variant="filled" />
          <Chip sx={{width:"130px",height:"27px",fontSize:"13px",padding:"8px"}} icon={<BarChart/>}  label="Reports" variant="filled" />
        </Box>
      </Box>
      <Box>
        <Typography variant='h7' sx={{color:"gray"}}>Notifications</Typography>
        <Box  sx={{margin:"14px",display:"flex",gap:"7px", flexDirection:"column"}}>
          <Chip sx={{width:"130px",height:"27px",fontSize:"13px",padding:"8px"}} icon={<MailOutline/>}  label="Mail" variant="filled" />
          <Chip sx={{width:"130px",height:"27px",fontSize:"13px",padding:"8px"}} icon={<DynamicFeed/>}  label="Feedback" variant="filled" />
          <Chip sx={{width:"130px",height:"27px",fontSize:"13px",padding:"8px"}} icon={<ChatBubbleOutline/>}  label="Messages" variant="filled" />
        </Box>
      </Box>
      <Box>
        <Typography variant='h7' sx={{color:"gray"}}>Staff</Typography>
        <Box  sx={{margin:"14px",display:"flex",gap:"7px", flexDirection:"column"}}>
          <Chip sx={{width:"130px",height:"27px",fontSize:"13px",padding:"8px"}} icon={<WorkOutline/>}  label="Manage" variant="filled" />
          <Chip sx={{width:"130px",height:"27px",fontSize:"13px",padding:"8px"}} icon={<TimelineOutlined/>}  label="Analytics" variant="filled" />
          <Chip sx={{width:"130px",height:"27px",fontSize:"13px",padding:"8px"}} icon={<Report/>}  label="Reports" variant="filled" />
        </Box>
      </Box>
      
      
      
    </MainBox> 
  )
}
