import express from "express";

const router = express.Router();
const gretings: string = "hello ";

router.get("/", (_, res) => {
  res.json({
    message: gretings,
  });
});

router.get("/api", (_, res) => {
  res.send("home");
});

export const routes = {
  router,
};
