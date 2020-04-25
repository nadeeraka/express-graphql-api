import { ApolloServer } from "apollo-server-express";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { resolvers } from "../graphql/resolverConfig";
import { routes } from "../routes";
import { dbConnect } from "../util/DButill";
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

  await app.use(routes.router);
  const apolloServer: any = new ApolloServer({
    schema: await buildSchema({
      resolvers: resolvers,
    }),
  });
  apolloServer.applyMiddleware({ app });

  await app.listen(port, () => logger(`server runing on ${port}`));
};
