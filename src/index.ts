import "reflect-metadata";
import express from "express";
import { routes } from "./routes";
import morgan from 'morgan'

const port: string | number = process.env.port || 8080;
const init = async () => {
  const app = express();
  await app.use(morgan('common'))
  await app.use(routes.router);

  await app.listen(port, () => console.log(`server runing on ${port}`));
};
init();

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));
