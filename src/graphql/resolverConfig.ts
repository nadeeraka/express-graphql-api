import { LoginResolver } from "../graphql/resolvers/Login";
import { RegisterResolver } from "../graphql/resolvers/Register";
import { UserResolver } from "../graphql/resolvers/User";
import { IncomeResolver } from "../graphql/resolvers/Income";

export const resolvers = [
  UserResolver,
  RegisterResolver,
  LoginResolver,
  IncomeResolver,
];
