import { Login } from '../graphql/resolvers/Login';
import { Register } from '../graphql/resolvers/Register';
import { UserResolver } from '../graphql/resolvers/User';

export const resolvers  = [UserResolver, Register, Login]