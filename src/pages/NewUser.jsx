import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, FormControl, FormControlLabel, FormLabel, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import React from 'react'

export default function NewUser() {
const [showPassword, setShowPassword] = React.useState(false);
const handleClickShowPassword = () => setShowPassword((show) => !show);
const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box flex={4} sx={{padding:"50px" }}>
        <Typography variant='h5' >New User</Typography>
        <Box sx={{display:"flex",flexWrap:"wrap",gap:"30px" ,marginTop:"40px", marginBottom:"40px"}}>
        <TextField sx={{width:"25rem"}} id="outlined-basic" label="Username" variant="outlined" />
        <TextField sx={{width:"25rem"}} id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField sx={{width:"25rem"}} id="outlined-basic" label="Email" variant="outlined" />

        <FormControl sx={{ width:"25rem" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>


        <TextField sx={{width:"25rem"}} id="outlined-basic" label="Phone" variant="outlined" />
        <TextField sx={{width:"25rem"}} id="outlined-basic" label="Outlined" variant="outlined" />

       <FormControl sx={{width:"25rem"}}>
        <FormLabel>Gender</FormLabel>
        <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
        >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            
        </RadioGroup>
        </FormControl>

        <FormControl sx={{width:"8rem"}}>
        <InputLabel id="demo-simple-select-label">Active</InputLabel>
        <Select labelId="demo-simple-select-label">
            <MenuItem >Yes</MenuItem>
            <MenuItem >No</MenuItem>
        </Select>
        </FormControl>
        </Box>
        <Button size='large' variant="contained">Create</Button>
    </Box>
  )
}
