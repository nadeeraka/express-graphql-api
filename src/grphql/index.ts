import "reflect-metadata";
import {ApolloServer} from 'apollo-server-express'

export const apolloServer = new ApolloServer({
    typeDefs:`
    type Query{
        hello:String!
    }`,
    resolvers:{
        Query:{
            hello:()=>'hello'
        }
    }
    
})