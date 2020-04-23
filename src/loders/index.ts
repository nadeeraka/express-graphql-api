import "reflect-metadata";
import express from "express";
import { routes } from "../routes";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";

const port: string | number = process.env.port || 8080;
export const init = async () => {
  const app = express();
  await app.use(morgan("common"));
  await app.use(bodyParser.urlencoded({ extended: false }));
  await app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
  await app.use(helmet());

  await app.use(routes.router);



  await app.listen(port, () => console.log(`server runing on ${port}`));
};

