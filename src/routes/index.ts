import express from "express";

const router = express.Router();
const gretings: string = "hello ";

router.get("/", (_, res) => {
  res.send(gretings);
});

export const routes = {
  router,
};
