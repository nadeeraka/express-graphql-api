import { LoginResolver } from "../graphql/resolvers/Login";
import { RegisterResolver } from "../graphql/resolvers/Register";
import { UserResolver } from "../graphql/resolvers/User";
import { IncomeResolver } from "../graphql/resolvers/Income";
import { ExpenseResolver } from "../graphql/resolvers/Expense";
import { MainQueryResolver } from "../graphql/resolvers/MainQueryResolver";
import { SavingResolver } from "../graphql/resolvers/Saving";
export const resolvers = [
  UserResolver,
  RegisterResolver,
  LoginResolver,
  IncomeResolver,
  ExpenseResolver,
  MainQueryResolver,
  SavingResolver,
];
