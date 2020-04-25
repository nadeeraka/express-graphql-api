import { User } from "src/entity/User";
import { sign } from "jsonwebtoken";
const dotenv = require("dotenv").config();
const SECRET_KEY: any = process.env.SECRET_KEY;
const SECRET_KEY_TWO: any = process.env.SECRET_KEY_TWO;

export const createAccessToken =  (user: User) => {
  return sign({ userId: user.id }, SECRET_KEY, { expiresIn: "15m" });
};

export const createRefreshToken =  (user: User) => {
  return sign({ userId: user.id }, SECRET_KEY_TWO, { expiresIn: "7d" });
};
