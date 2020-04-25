import { ApolloServer } from "apollo-server-express";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { resolvers } from "../graphql/resolverConfig";
import { dbConnect } from "../util/db/DButill";
import { logger } from "../util/logger";

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

  await dbConnect();

  const apolloServer: any = new ApolloServer({
    schema: await buildSchema({
      resolvers: resolvers,
    }),
    context: ({ req, res }) => ({ req, res }),
  });
  apolloServer.applyMiddleware({ app });

  await app.listen(port, () => logger(`server running on ${port}`));
};
