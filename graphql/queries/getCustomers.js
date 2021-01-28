import { gql } from 'graphql-request'

import { GraphQLClient } from '../../config/GraphQLClient'

const GET_CUSTOMERS_QUERY = gql`
  query GetCustomers {
    customers(orderBy: createdAt_ASC) {
      id
      name
      logo {
        id
        url
      }
    }
  }
`

export async function getCustomers () {
  const { customers } = await GraphQLClient.request(
    GET_CUSTOMERS_QUERY
  )

  return customers;
}