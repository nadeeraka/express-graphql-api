import "reflect-metadata";
import { bootstrap } from "./bin";
import { logger } from "./util/logger";
const dotenv = require("dotenv").config();


try {
  bootstrap();
  logger("Performing system checks 🧭 ");
} catch (error) {
  logger("", true, error);
}

