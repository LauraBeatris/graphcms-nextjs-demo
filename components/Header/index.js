import { Flex, Menu, Button, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export function Header(props) {
  return (
    <Flex 
      as="header" 
      width='full' 
      paddingY={10} 
      {...props ?? {}}
    >
      <Menu>
        <MenuButton 
          as={Button} 
          rightIcon={<ChevronDownIcon />}
          backgroundColor='gray.300' 
        >
          Menu
        </MenuButton>
        <MenuList as="nav">
          <MenuItem><Link href='/'>Home</Link></MenuItem>
          <MenuItem><Link href='/customers'>Customers</Link></MenuItem>
        </MenuList>
      </Menu>
   </Flex>
  )
}