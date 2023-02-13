import React from 'react'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import "./techskill.css" 
export const TechSkill = () => {
  return (
    <div className='tech_main'>
        
        <Heading textAlign="center" fontFamily="monospace" mt="90px">Technical Skills</Heading>

        <div style={{paddingTop:"30px",width:"90%",margin:"auto"}}>
          <SimpleGrid spacing={4} columns={[1, 1,2]}>
            <Card backgroundColor="gray.200" opacity="0.95" boxShadow ="rgba(0, 0, 0, 0.24) 0px 3px 8px">
              <CardHeader>
                <Heading size='lg' textAlign="center"> Front-End</Heading>
              </CardHeader>
              <CardBody id="cardskill" display="grid" gridTemplateColumns="1fr 1fr 1fr" w="80%" gap="30px" m="auto">
                
                <Box>
                <Image src="https://skillicons.dev/icons?i=html" w="100%"/>
                <Text textAlign="center" fontSize="15px" fontWeight="bold" pt="10px">HTML</Text>
                </Box>
                <Box>
                <Image src="https://skillicons.dev/icons?i=css" w="100%"/>
                <Text textAlign="center" fontSize="15px" fontWeight="bold" pt="10px">CSS</Text>
                </Box>
                <Box>
                <Image src="https://skillicons.dev/icons?i=javascript" w="100%" />
                <Text textAlign="center" fontSize="15px" fontWeight="bold" pt="10px">JAVASCRIPT</Text>
                </Box>
                <Box>
                <Image src="https://skillicons.dev/icons?i=react" w="100%"/>
                <Text textAlign="center" fontSize="15px" fontWeight="bold" pt="10px">REACT</Text>
                </Box>
                <Box>
                <Image src="https://skillicons.dev/icons?i=redux" w="100%"/>
                <Text textAlign="center" fontSize="15px" fontWeight="bold" pt="10px">REDUX</Text>
                </Box>
                <Box>
                <Image src="https://skillicons.dev/icons?i=nextjs" w="100%"/>
                <Text textAlign="center" fontSize="15px" fontWeight="bold" pt="10px">NEXTJS</Text>
                </Box>                
              </CardBody>
            </Card>
            <Card backgroundColor="gray.200" opacity="0.95" boxShadow ="rgba(0, 0, 0, 0.24) 0px 3px 8px">
              <CardHeader>
                <Heading size='lg' textAlign="center">Back-End & Tools</Heading>
              </CardHeader>
              <CardBody id="cardskill" display="grid" gridTemplateColumns="1fr 1fr 1fr" w="80%" gap="30px" m="auto">
                <Box>
                <Image src="https://skillicons.dev/icons?i=nodejs" w="100%"/>
                <Text textAlign="center" fontSize="15px" fontWeight="bold" pt="10px">NODEJS</Text>
                </Box>
                <Box>
                <Image src="https://skillicons.dev/icons?i=mongodb" w="100%"/>
                <Text textAlign="center" fontSize="15px" fontWeight="bold" pt="10px">MONGODB</Text>
                </Box>
                <Box>
                <Image src="https://skillicons.dev/icons?i=express" w="100%"/>
                <Text textAlign="center" fontSize="15px" fontWeight="bold" pt="10px">EXPRESSJS</Text>
                </Box>
                <Box>
                <Image src="https://skillicons.dev/icons?i=git" w="100%"/>
                <Text textAlign="center" fontSize="15px" fontWeight="bold" pt="10px">GIT</Text>
                </Box>
                <Box>
                <Image src="https://skillicons.dev/icons?i=github" w="100%"/>
                <Text textAlign="center" fontSize="15px" fontWeight="bold" pt="10px">GITHUB</Text>
                </Box>
                <Box>
                <Image src="https://skillicons.dev/icons?i=vscode" w="100%"/>
                <Text textAlign="center" fontSize="15px" fontWeight="bold" pt="10px">VSCODE</Text>
                </Box>
              </CardBody>
            </Card>
          </SimpleGrid>
        </div>
    </div>
  )
}
