import { VStack, Heading, SimpleGrid } from '@chakra-ui/react'
import { Quote } from '../components/Quote'

export default function Home() {
  return (
    <VStack spacing={10} alignItems='flex-start'>
        <Heading as="h1">Landing Page Title</Heading>
        <Heading 
          as="h2" 
          fontSize={20} 
          marginTop={2} 
          fontWeight={400}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          In felis risus, posuere sed porttitor eget, consectetur sed velit. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Heading>

        <SimpleGrid columns={2} spacing={10} marginTop={10}>
          <Quote
            quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            logoUrl="https://bit.ly/sage-adebayo"
            speakerName="Segun Adebayo"
          />

          <Quote 
            quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            logoUrl="https://bit.ly/sage-adebayo"
            speakerName="Segun Adebayo"
          />
        </SimpleGrid>
    </VStack>
  )
}
