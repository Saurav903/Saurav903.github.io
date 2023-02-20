
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaGg } from "react-icons/fa";
import Pdf from "./Saurav-Kumar-Resume.pdf";

const Links = [{li:'Home',sc:"#home"}, {li:'About Me',sc:"#abt"}, {li:'Skills',sc:"#skil"},{li:"Projects",sc:"#proj"},{li:"Contact",sc:"#cont"},{li:"Resume",sc:"#newResumeid"}];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box position="fixed" zIndex={1} bg={useColorModeValue('gray.300', 'gray.900')} px={6} w="100%" boxShadow='lg'> 
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          
          <Flex alignItems={'center'}>
                {/* <FaGg
                  size="30px"
                /> */}
                <Text fontSize={"30px"} fontWeight="bold">Saurav <span style={{color:"#427eff"}}>Kumar</span></Text>
                
          </Flex>
          <HStack spacing={8} alignItems={'center'}>
            {/* <Box>Logo</Box> */}
            <HStack
              as={'nav'}
              spacing={9}
              display={{ base: 'none',md:"none", lg: 'flex' }} fontSize="20px">
              {Links.map((link) => (
                <a href={link.sc} style={{fontWeight:"bold"}}><NavLink key={link}>{link.li}</NavLink></a>
              ))}
              {/* <NavLink fontSize="20px" ><a href={"#newResumeid"} style={{fontWeight:"bold"}}>Resume</a></NavLink> */}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ lg: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <a href={link.sc}><NavLink key={link}>{link.li}</NavLink></a>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      
    </>
  );
}