import { VStack, Heading, SimpleGrid } from '@chakra-ui/react'

import { Customer } from '../components/Customer'
import { getCustomers } from '../graphql/queries/getCustomers'

export async function getStaticProps() {
  const customers = await getCustomers();

  try { 
    return {
      props: { 
        customers 
      }
    }
  } catch (error) {
    return {
      props: {}
    }
  }
}

export default function Customers({ customers }) {
  return (
    <VStack spacing={10} alignItems='flex-start'>
      <Heading as="h1">Customers</Heading>

      <SimpleGrid 
        width='full'
        columns={2} 
        spacing={10} 
        marginTop={10} 
      >
        {(customers ?? []).map(({ 
          id,
          name, 
          logo: { url }
        }) => (
          <Customer
            key={id}
            customerName={name}
            logoUrl={url}
          />
        ))}
      </SimpleGrid>
    </VStack>
  )
}
