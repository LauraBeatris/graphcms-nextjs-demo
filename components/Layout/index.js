import { Flex, Container } from '@chakra-ui/react'

import { Header } from '../Header'

export function Layout({ children }) {
  return (
    <Flex backgroundColor='gray.100' minHeight='100vh' minWidth='100vw'>
      <Container maxW="3xl">
        <Header />
        
        {children}
      </Container>
    </Flex>
  )
}
