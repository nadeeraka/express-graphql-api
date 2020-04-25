import { createConnection } from "typeorm";
import { logger } from "./logger";

//createConnection()

export const dbConnect = async () => {
  try {
    const connection = await createConnection();
    if (connection) {
      logger("Db connected !");
    }
  } catch (error) {
    logger("Db connection error");
  }
};
