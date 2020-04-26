import { Login } from '../graphql/resolvers/Login';
import { Register } from '../graphql/resolvers/Register';
import { UserResolver } from '../graphql/resolvers/User';
import {IncomeResolver} from '../graphql/resolvers/Income'

export const resolvers  = [UserResolver, Register, Login,IncomeResolver]