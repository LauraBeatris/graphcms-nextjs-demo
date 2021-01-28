import { VStack, Heading, SimpleGrid } from '@chakra-ui/react'

import { Customer } from '../components/Customer'

export default function Customers() {
  return (
    <VStack spacing={10} alignItems='flex-start'>
        <Heading as="h1">Customers</Heading>

        <SimpleGrid 
          width='full'
          columns={2} 
          spacing={10} 
          marginTop={10} 
        >
          <Customer
            customerName="Segun Adebayo"
            logoUrl="https://bit.ly/sage-adebayo"
          />

          <Customer 
            customerName="Segun Adebayo"
            logoUrl="https://bit.ly/sage-adebayo"
          />
        </SimpleGrid>
    </VStack>
  )
}
