
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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaGg } from "react-icons/fa";

const Links = ['Home', 'About Me', 'Skills',"Projects","Contact"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box position="fixed" zIndex={1} bg={useColorModeValue('gray.100', 'gray.900')} px={4} w="100%" boxShadow='lg'> 
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          
          <Flex alignItems={'center'}>
                <FaGg
                  size="30px"
                />
          </Flex>
          <HStack spacing={8} alignItems={'center'}>
            {/* <Box>Logo</Box> */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }} fontSize="20px">
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <NavLink fontSize="20px" ><a href="https://doc-0c-9g-docs.googleusercontent.com/docs/securesc/5afjcflh5rp2s4kme0ds0ue7ldll6vop/ovrhk03gh3di3t71tkmki1kigi8o2bma/1672727700000/16113878993399818267/16113878993399818267/1u7D7vobQ5oDAcB0wWIzjTYTPoRmBRHTu?e=download&ax=ALjR8sx-pCLRTzXX6ZMTs70-rNq4xxC0GCh-Dy1g9_QqK7aImnhbFnI8OT-kV6l6CuvCjBzLnL-LL9v2zohMvKo5WHHW4wsrYE7NuMlytlh5KmjOcnTbYu4jMFVCkrc31hqpxCuTY0jVRw55txtSKAjmazsK7NfceKrI53HgHJFbmuz9-k7OGJ__F-EkG9gU8KonxQWnVZptpkaLzydTlqfCc_2TeNXvXYJjY5d2Mj_iNk7e6uITsJstZ7eFhDDv5DvqY74oVANY9WKVI1lUuMSE7HKZCkwARQwDkfXZqrIhzH8lLiUTXBQfvbdvftEPod4Id-hPRc2-7COrDSqNBLFHfLhMpxOWXRX0oLxDG2xDc41E1LkI-VvCREfolHpRLSiJ0wfMpTycRuX1unOIuNj-pgIAntJJZiO6YlCvmvU8EysQa2pAPiFS6JrvUOS4F21PFW02lOttvFJ3KqlKSe3yhwbW2t_wkt2J11kPedmE-qERkncc4DS-sVFBCqXIgBRnTEBuLp1mdJfjg7l4JxNvGJnLAcBytDt7h2C_uOD6WWqkpXCMKYfQJYT5qbRwFRWn2JQ1Mung_4a4OtapYfyg1lspbK3w2EtcSZxJ2FGjj9cafJJog17a2agNNPeMBPtFX546GX5z8x71OxGQhKzT57lT4cHLGUli_NT5Tkem62TDlsv3-1C3NgQlgJY7ny3WUvSu2r9SW3BIAQP_Jmd_XkK18Wy44vAAhsyroordlrVsOmM9xn1t7_orsw6ejgHn7ppE9q3LcfKIxDaz23eO_w64sL3vSJxS6YBDIAGCeR0nlxydxjMTj2lA61hyNC9d0xlysCCDiN_GyXZ4w-h4zwepEiA9ixbX5sHc-I1-3gSAfzWx4pOOtonuXtUKop-A4g&uuid=33d00c1c-6593-41aa-94eb-82a63f18f7c9&authuser=0&nonce=ngd0i9lj9l368&user=16113878993399818267&hash=bdocgo719q6jbke7dqtf56uah1mr3r7l" download>Resume</a></NavLink>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      
    </>
  );
}