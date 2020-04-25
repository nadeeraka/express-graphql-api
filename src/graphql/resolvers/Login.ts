import { Mutation, Resolver, Arg, ObjectType, Field } from "type-graphql";
import { User } from "../../entity/User";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

const dotenv = require("dotenv").config();
const SECRET_KEY: any = process.env.SECRET_KEY;

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

@Resolver()
export class Login {
  @Mutation(() => LoginResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<LoginResponse> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("invalid login");
    }
    const isValid = await compare(password, user.password);

    if (!isValid) {
      throw new Error("bad password !");
    }

    // login success

    return {
      accessToken: sign({ userId: user.id }, SECRET_KEY),
    };
  }
}
