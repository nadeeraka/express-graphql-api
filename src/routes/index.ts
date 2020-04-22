import express from "express";

const router = express.Router();
const gretings: string = "hello ";

router.get("/", (_, res: any) => {
  res.json({
    message: gretings,
  });
});

router.get("/home", (_, res) => {
  res.send("home");
});

export const routes = {
  router,
};
