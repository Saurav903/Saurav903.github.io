import { Heading } from '@chakra-ui/react'
import React from 'react'

const StateCalender = () => {
  return (
    <div>
        <Heading style={{fontFamily:"monospace",textAlign:"center",color:"rgb(66, 66, 66)",marginTop:"80px"}}>My Statistics</Heading>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
            <img src="https://i.imgur.com/Kwtk4S4.png" alt="img" />
        </div>
        <Heading style={{fontFamily:"monospace",textAlign:"center",color:"rgb(66, 66, 66)",marginTop:"50px"}}>My Github Calender</Heading>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
            <img src="https://i.imgur.com/DvVkx0h.png" alt="img" style={{borderRadius:"10px"}} />
        </div>
    </div>
  )
}

export default StateCalender