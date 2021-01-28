import { gql } from 'graphql-request'

import { GraphQLClient } from '../../config/GraphQLClient'

const GET_LANDING_PAGE_QUERY = gql`
  query GetLandingPage($id: ID!) {
    landingPage(where: {id: $id}) {
      id
      body
      title 
      customerQuotes {
        id
        quote
        speakerName
        customer {
          id
          name
          logo {
            id
            url
          }
        }
      }
    }
  }
`

export async function getLandingPage (variables) {
  const { landingPage } = await GraphQLClient.request(
    GET_LANDING_PAGE_QUERY,
    variables
  )

  return landingPage;
}