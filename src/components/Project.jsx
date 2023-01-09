import { Heading,Box, Card, Image, Stack, CardBody, Text, CardFooter, Button, HStack } from '@chakra-ui/react';
import {DiHtml5,DiCss3Full,DiJavascript1,DiReact} from "react-icons/di";
import React from 'react'

const Project = () => {
  return (
    <div>
        <Heading style={{fontFamily:"monospace",textAlign:"center",color:"rgb(66, 66, 66)",marginTop:"50px"}}>Projects</Heading>
        <Box  w="95%" margin="auto" mt="50px">
            <Card
                direction={{ base: 'column', md: 'row' }}
                overflow='hidden'
                variant='outline'
                >
                <Box w="100%">
                <Image
                    objectFit="contain"
                    // maxW={{ base: '100%' }}
                    src='https://i.imgur.com/jf6UWXV.png'
                    alt='Caffe Latte'
                    borderRadius="10px"
                    
                />
                    </Box>
                <Stack>
                
                    <CardBody>
                    <Heading size='md'>BestBuy Clone</Heading>

                    <Text py='2' noOfLines={3}>
                        Best Buy allows their visitors to shop online, similar to most e-commerce sites, but gives them the option of picking up the product in store. This caters to the customers that do not want to wait for the product to be shipped to them and do not have time or do not want to go into the store to select the product.
                    </Text>
                        <HStack >
                            <DiHtml5 fontSize="30px"/> <DiCss3Full fontSize="30px"/> <DiJavascript1 fontSize="30px"/> <DiReact fontSize="30px"/>
                        </HStack>
                        <Box style={{display:"flex",justifyContent:"space-between",width:"30%",marginTop:"10px"}} maxW={{sm:"50%"}}>
                        <a href="https://github.com/Saurav903/-alluring-steam-5787" target="_blank"><Button variant='solid' colorScheme='blue'>
                        Github link
                        </Button></a>
                        <a href="https://buy-all.netlify.app/" target="_blank"><Button variant='solid' colorScheme='blue'>Check Out!</Button></a></Box>
                    </CardBody>
                </Stack>
            </Card>
            <Card
                direction={{ base: 'column', md: 'row' }}
                overflow='hidden'
                variant='outline'
                mt="40px"
                >
                <Box w="100%">
                <Image
                    objectFit="fill"
                    maxW={{ base: '100%' }}
                    src='https://i.imgur.com/LowRWPQ.png'
                    alt='Caffe Latte'
                    borderRadius="10px"
                    
                />
                    </Box>
                <Stack>
                
                    <CardBody marginLeft="15px">
                    <Heading size='md'>FarFetch Clone</Heading>

                    <Text py='2' noOfLines={3}>
                        FlairClothings is an ecommerce website for love of fashion. Our mission is to be the global platform for luxury fashion connecting creators, curators and customers.This caters to the customers that do not want to wait for the product to be shipped to them and do not have time or do not want to go into the store to select the product.
                    </Text>
                        <HStack >
                            <DiHtml5 fontSize="30px"/> <DiCss3Full fontSize="30px"/> <DiJavascript1 fontSize="30px"/> 
                        </HStack>
                        <Box style={{display:"flex",justifyContent:"space-between",width:"30%",marginTop:"10px"}} maxW={{sm:"50%"}}>
                        <a href="https://github.com/hr927/-whole-lace-7572" target="_blank"><Button variant='solid' colorScheme='blue'>
                        Github link
                        </Button></a>
                        <a href="https://polite-concha-547abb.netlify.app/" target="_blank"><Button variant='solid' colorScheme='blue'>Check Out!</Button></a></Box>
                    </CardBody>
                </Stack>
            </Card>
            <Card
                direction={{ base: 'column', md: 'row' }}
                overflow='hidden'
                variant='outline'
                mt="40px"
                >
                <Box w="100%">
                <Image
                    objectFit="fill"
                    maxW={{ base: '100%' }}
                    src='https://i.imgur.com/cBNcmk1.png'
                    alt='Caffe Latte'
                    borderRadius="10px"
                    
                />
                    </Box>
                <Stack>
                
                    <CardBody marginLeft="10px">
                    <Heading size='md'>MailTrap Clone</Heading>

                    <Text py='2' noOfLines={3}>
                    Mail Trap is email testing website were customer get free mail services for testing there website.
                    Test, Send, Control your email infrastructure in one place. Start today - Sign Up free! Get your emails into customers' inboxes just in time. Start today - Sign Up free! Trusted by 150k teams. Responsive support. Affordable pricing.
                    </Text>
                        <HStack >
                            <DiHtml5 fontSize="30px"/> <DiCss3Full fontSize="30px"/> <DiJavascript1 fontSize="30px"/> 
                        </HStack>
                        <Box style={{display:"flex",justifyContent:"space-between",width:"30%",marginTop:"10px"}} maxW={{sm:"50%"}}>
                        <a href="https://github.com/Saurav903/superb-rice-4683" target="_blank"><Button variant='solid' colorScheme='blue'>
                        Github link
                        </Button></a>
                        <a href="https://celebrated-vacherin-d0d721.netlify.app/" target="_blank"><Button variant='solid' colorScheme='blue'>Check Out!</Button></a></Box>
                    </CardBody>
                </Stack>
            </Card>
        </Box>
    </div>
  )
}

export default Project;