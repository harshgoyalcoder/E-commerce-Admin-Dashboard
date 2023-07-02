import { Avatar, Box, Button, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useEffect, useState } from 'react';
import {format} from "timeago.js"
import { userRequest } from '../requestMethods';

export default function WidgetLg() {
  
const [orders,setOrders]=useState([]);
useEffect(()=>{
  const getOrders=async()=>{
    try{
      const res=await userRequest.get("orders");
      //it will display only 2 new users
      setOrders(res.data);

    }catch{}

    };
    getOrders();
},[]);


  return (
   
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              
                <Chip
                    avatar={<Avatar alt="" src={order.img} />}
                    label={order.userId}
                    variant="outlined"
                    size="medium"
                    // disabled={false}
                  />
              </TableCell>
              <TableCell align="right">{format(order.createdAt)}</TableCell>
              <TableCell align="right">{order.amount}</TableCell>
              <TableCell align="right"><Button variant="contained" color="success">{order.status}</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}
