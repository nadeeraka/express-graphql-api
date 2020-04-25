import "reflect-metadata";
import express from "express";
import { routes } from "../routes";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";
import { UserResolver } from "../graphql/resolvers/UserResolver";
import { buildSchema } from "type-graphql";
import { loder } from "../util/loder";
import { bootMiddlewares } from "../middlewares";
import { createConnection } from "typeorm";
import {dbConnect} from '../util/DButill'
import {logger} from '../util/logger'
import { Register} from '../graphql/resolvers/RegisterResolver'
const port: string | number = process.env.port || 8080;
const app = express();
export const init = async () => {
  await app.use(morgan("common"));
  await app.use(bodyParser.urlencoded({ extended: false }));
  await app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
  await app.use(helmet());

  await dbConnect()

  await app.use(routes.router);
  const apolloServer: any = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, Register],
    }),
  });

  apolloServer.applyMiddleware({ app });

  await app.listen(port, () => logger(`server runing on ${port}`));
};
