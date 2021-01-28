import { GraphQLClient as OriginalGraphQLClient } from 'graphql-request'

export const GraphQLClient = new OriginalGraphQLClient(process.env.GRAPHCMS_ENDPOINT)