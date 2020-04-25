import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { hash } from "bcryptjs";
import { User } from "../../entity/User";
const dotenv = require("dotenv").config();
const ss: any = process.env.SECRET_KEY;


export class UserResolver {
  @Query(() => String)
  hello() {
    return "hi";
  }

  @Mutation()
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const hashPassword = await hash(password, ss);

    return User.insert({
      email,
      password: hashPassword,
    });
  }
}
