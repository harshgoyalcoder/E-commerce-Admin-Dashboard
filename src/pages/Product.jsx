import { Avatar, Box, Button, Chip, FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import Chart from "../components/Chart";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from '@emotion/styled';
import { Publish } from '@mui/icons-material';
import { userRequest } from "../requestMethods";

const StyledBox=styled(Box)`
     /* width: 150px; */
    display: flex;
    justify-content: space-between;
`;
const RightBox=styled(Box)`
   margin: 20px;
   padding: 20px;
 
   -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
export default function Product() {

  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);

  const product = useSelector((state)=>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );


  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);
  return (
    <div style={{flex:4, padding:"20px"}}>
      <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <Typography variant='h4'sx={{fontWeight:"600"}}>Product</Typography>
        <Link to="/newproduct">
         <Button variant="contained"  >Create</Button>
        </Link>
      </Box>

      <Box display={"flex"}>
        <Box sx={{flex:1}}> 
        <Chart data={pStats} title="Sales Performance" grid dataKey="Sales" />
         </Box>
        <RightBox style={{width:"30rem",flex:1,margin:"20px",padding:"20px"}}>
          <Box sx={{display:"flex",alignItems:"center" ,gap:"10px"}}><Avatar alt="Remy Sharp" src={product.img} />  <Typography variant='h5'>{product.title}</Typography>  </Box>
            <Box sx={{marginTop:"10px"}}>
              <StyledBox>
                <Typography variant='h6'  style={{ fontWeight: 'bold' }}>id:</Typography>
                <Typography variant='h6'>{product._id}</Typography>
              </StyledBox>
              <StyledBox>
                <Typography variant='h6'  style={{ fontWeight: 'bold' }}>sales:</Typography>
                <Typography variant='h6'>5123</Typography>
              </StyledBox>
              <StyledBox>
                <Typography variant='h6'  style={{ fontWeight: 'bold' }}>in Stock:</Typography>
                <Typography variant='h6'>{product.inStock}</Typography>
              </StyledBox>
          
            </Box>
      </RightBox>
        </Box>
  {/* Bottom page */}

        <RightBox style={{ display:"flex", justifyContent:"space-between"}}>

          {/* for form info */}
          <Box sx={{display:"flex",flexDirection:"column" , gap:"15px"}}>
            {/* <Typography variant='h6'>Product Name</Typography> */}
            <TextField id="standard-basic" label="Product Name" variant="standard" />
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">inStock</FormLabel>
                <RadioGroup row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Active</FormLabel>
                <RadioGroup row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>

          </Box>

          {/* for form img & button */}
          <Box>
            <Box sx={{display:"flex",alignItems:"center"}}>
              <img src={product.img} alt='' style={{width:"100px",height:"100px",borderRadius:"10px",objectFit:"cover",marginRight:"20px"}}/>
              <label htmlFor="file">
                <Publish/>
              </label>
              <input type='file' id='file' style={{display:"none"}}/>
            </Box>
            <Button variant="contained">Update</Button>
          </Box>
        </RightBox>

    </div>
  )
}
