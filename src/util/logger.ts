export const logger = (s?: string|any, e?: boolean, err?: any): void => {
  const env = process.env.NODE_ENV || "development";
  if (env === "development") {
    if (e) {
      console.error(
        ` errors found  error  stack is ${err ? err : " not found"}`
      );
    } else {
      console.log(s);
    }
  }
};
