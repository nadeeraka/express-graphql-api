import { Mutation, Resolver, Arg } from "type-graphql";
import { User } from "../../entity/User";
import { compare } from "bcryptjs";

@Resolver()
export class Login {
  @Mutation(() => Boolean)
  async login(@Arg("email") email: string, @Arg("password") password: string) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("invalid login");
    }
    const isValid = await compare(password, user.password);

    if (!isValid) {
        throw new Error("bad password !");
    }
  }
}
