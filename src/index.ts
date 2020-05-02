import "reflect-metadata";
import { bootstrap } from "./bin";
import { logger } from "./util/logger";
const dotenv = require("dotenv").config();
import { v4 as uuidv4, v4 } from 'uuid';

console.log(v4())

try {
  bootstrap();
  logger("Performing system checks 🧭 ");
} catch (error) {
  logger("", true, error);
}

