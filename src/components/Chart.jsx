import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import {LineChart,Line,XAxis,CartesianGrid,Tooltip,ResponsiveContainer} from "recharts";


const Container=styled(Box)`
   margin: 20px;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
export default function chart({data, title, dataKey, grid}) {
  return (
    <Container>
     <Typography variant='h5' sx={{marginBottom: "20px"}}>{title}</Typography>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
  </Container>
  )
}
