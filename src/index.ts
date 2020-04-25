import "reflect-metadata";
import { init } from "./boot";
import { logger } from "./util/logger";
const dotenv = require("dotenv").config();

try {
  init();
  logger("All systems running! ");
} catch (error) {
  logger("", true, error);
}

