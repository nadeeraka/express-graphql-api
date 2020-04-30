import "reflect-metadata";
import { init } from "./bin";
import { logger } from "./util/logger";
const dotenv = require("dotenv").config();

try {
  init();
  logger("Performing system checks 🧭 ");
} catch (error) {
  logger("", true, error);
}

