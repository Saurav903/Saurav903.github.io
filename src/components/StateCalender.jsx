import { Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const StateCalender = () => {
  return (
    <div>
        <Heading style={{fontFamily:"monospace",textAlign:"center",color:"white",marginTop:"80px"}}>My Statistics</Heading>
        <SimpleGrid columns={[1, 1,1,2]} gap="20px"  w="70%" m="auto" mt="30px">
          <div style={{margin:"auto"}}>
          <img src="https://i.imgur.com/TL6lZh7.png" alt="img" style={{borderRadius:"10px"}}/>
          </div>
          <div style={{margin:"auto"}}>
          <img src="https://i.imgur.com/p8cDa5q.png" alt="img" style={{borderRadius:"10px"}}/>
          </div>
        </SimpleGrid>
          {/* <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
            <img src="https://i.imgur.com/V7E7FWv.png" alt="img" style={{borderRadius:"10px"}}/>
            </div> */}
        <Heading style={{fontFamily:"monospace",textAlign:"center",color:"white",marginTop:"80px"}}>My Github Calender</Heading>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
            <img src="https://i.imgur.com/DvVkx0h.png" alt="img" style={{borderRadius:"10px"}} />
        </div>
    </div>
  )
}

export default StateCalender