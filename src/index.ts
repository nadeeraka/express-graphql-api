import "reflect-metadata";
import express from "express";
import { routes } from "./routes";

const port = process.env.port || 8080;
(async () => {
  const app = express();
  app.use(routes.router);

//   app.get("/", (_, res) => {
//     res.send("GET request to the homepage");
//   });

  app.listen(port, () => console.log(`server runing on ${port}`));
})();

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
