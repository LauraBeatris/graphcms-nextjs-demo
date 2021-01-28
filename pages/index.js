import { VStack, Heading, SimpleGrid } from '@chakra-ui/react'

import { Quote } from '../components/Quote'
import { getLandingPage } from '../graphql/queries/getLandingPage'

const LANDING_PAGE_ID = "ckkgz411s0ir70a36qsv5qchv"

export async function getStaticProps() {
  try {
    const landingPage = await getLandingPage({
      id: LANDING_PAGE_ID
    })

    return {
      props: {
        landingPage
      }
    }
  } catch (error) {
    return {
      props: {}
    }
  }
}

export default function Home({ landingPage }) {
  const { title, body, customerQuotes = [] } = landingPage ?? {}

  return (
    <VStack spacing={10} alignItems='flex-start'>
      <Heading as="h1">{title}</Heading>
      <Heading 
        as="h2" 
        fontSize={20} 
        marginTop={2} 
        fontWeight={400}
      >
        {body}
      </Heading>

      <SimpleGrid columns={2} spacing={10} marginTop={10}>
        {customerQuotes.map(({ 
          id,
          quote, 
          customer: { 
            logo: { url }
          }, 
          speakerName 
        }) =>  (
          <Quote
            id={id}
            quote={quote}
            logoUrl={url}
            speakerName={speakerName}
          />
        ))}
      </SimpleGrid>
    </VStack>
  )
}
