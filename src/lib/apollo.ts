import {ApolloClient, InMemoryCache} from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8dulh18zh01z26zoj5t8r/master',
    cache: new InMemoryCache()
})