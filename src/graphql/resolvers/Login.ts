import { Mutation, Resolver, Arg, ObjectType, Field, Ctx } from "type-graphql";
import { User } from "../../entity/User";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { Main } from "../../util/types";
import { createAccessToken, createRefreshToken } from "../../util/auth";

const dotenv = require("dotenv").config();
const SECRET_KEY: any = process.env.SECRET_KEY;
const SECRET_KEY_TWO: any = process.env.SECRET_KEY_TWO;

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
    @Arg("password") password: string,
    @Ctx() { res }: Main
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
    res.cookie("jid", createRefreshToken(user), {
      httpOnly: true,
    });

    return {
      accessToken: createAccessToken(user),
    };
  }
}
