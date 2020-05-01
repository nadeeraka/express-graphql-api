export const checkEnv = (): string => {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "dev";
};
