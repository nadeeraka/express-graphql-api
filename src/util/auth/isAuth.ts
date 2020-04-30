//this function check that request has token or not

import { MiddlewareFn } from "type-graphql";
import { Main } from "../types";
import { verify } from "jsonwebtoken";
import { logger } from "../logger";
const dotenv = require("dotenv").config();

export const isAuth: MiddlewareFn<Main> = ({ context }, next) => {
  const sk: any = process.env.SECRET_KEY;

  const auth = context.req.headers["authorization"];

  if (!auth) {
    throw new Error("Not valid request ⚠️ 🚫");
  }

  // verifying token

  try {
    const token = auth.split("")[1];
    const payload = verify(token, sk);
    context.payload = payload as any;
  } catch (error) {
    logger("", true, error);
  }

  return next();
};
