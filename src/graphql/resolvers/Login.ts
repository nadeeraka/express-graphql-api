import { compare } from "bcryptjs";
import { Arg, Ctx, Field, Mutation, ObjectType, Resolver } from "type-graphql";
import { User } from "../../models/User";
import { createAccessToken, createRefreshToken } from "../../util/auth";
import { Main } from "../../util/types";
import { sendRefreshToken } from "../../util/auth/refreshToken";

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

@Resolver()
export class LoginResolver {
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
    
    sendRefreshToken(res,createRefreshToken(user))

    return {
      accessToken: createAccessToken(user),
    };
  }
}
