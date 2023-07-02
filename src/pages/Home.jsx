import { Box } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import FeaturedInfo from '../components/FeatureInfo'
import WidgetLg from '../components/WidgetLg'
import WidgetSm from '../components/WidgetSm'
import { userData } from "../dummyData";

import Chart from "../components/Chart"
import { userRequest } from '../requestMethods'
export default function Home() {
  const [userStats,setUserStats]=useState([]);
  const MONTHS=useMemo(
    ()=>[
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],[]
  );

  useEffect(()=>{
    const getStats=async ()=>{
      try{
        const res=await userRequest.get("/users/stats");
        res.data.map((item)=>setUserStats((prev)=>[
          ...prev,{name:MONTHS[item._id-1],"Active User":item.total},
        ]))

      }catch{}
    }
    getStats();
  },[MONTHS])
  console.log(userStats)

  return (
    <Box  flex={6} padding={2} sx={{display:{xs:"none",sm:"block"}}}>
     <FeaturedInfo/>
     <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
     <div style={{display:"flex",margin:"20px"}}>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </Box>
  )
}
