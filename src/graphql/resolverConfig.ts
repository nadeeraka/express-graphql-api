import { LoginResolver } from "../graphql/resolvers/Login";
import { RegisterResolver } from "../graphql/resolvers/Register";
import { UserResolver } from "../graphql/resolvers/User";
import { IncomeResolver } from "../graphql/resolvers/Income";
import {ExpenseResolver} from '../graphql/resolvers/Expense'
export const resolvers = [
  UserResolver,
  RegisterResolver,
  LoginResolver,
  IncomeResolver,
  ExpenseResolver
];
