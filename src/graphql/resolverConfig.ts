import { ApolloServer } from "apollo-server-express";
import express from 'express'
import { buildSchema } from "type-graphql";
import {Register} from '../graphql/resolvers/Register'
import { resolve } from "dns";
import {UserResolver} from '../graphql/resolvers/User'
// const app = express();
// export const bootUpApploServer = async()=>
// {
//     const apolloServer: any = new ApolloServer({
//         schema: await buildSchema({
//           resolvers: [UserResolver, Register],
//         }),
//       });
//       apolloServer.applyMiddleware({ app });
// }

export const resolvers = [UserResolver, Register]