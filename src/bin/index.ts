import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import morgan from "morgan";
import { buildSchema } from "type-graphql";
import { resolvers } from "../graphql/resolverConfig";
import { dbConnect } from "../util/db/DButill";
import { logger } from "../util/logger";
import {app} from '../util/middleware/app'
import {routes} from '../middlewares'
import cookieParser from 'cookie-parser'

const port: string | number = process.env.port || 8080;
export const bootstrap = async () => {
  await app.use(morgan("common"));
  await app.use(cookieParser())
  await app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
// routes
 await routes()

  await dbConnect();

  const apolloServer: any = new ApolloServer({
    schema: await buildSchema({
      resolvers: resolvers,
    }),
    context: ({ req, res }) => ({ req, res }),
  });
  apolloServer.applyMiddleware({ app });

  await app.listen(port, () => logger(`🚀 Server ready at  ${port} `));
};
