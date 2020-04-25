import { Mutation, Resolver, Arg } from "type-graphql";
import { User } from "src/entity/User";

@Resolver()
class Login {
  @Mutation(()=>Boolean)
  async login(@Arg("email") email: string, @Arg("password") password: string) {
    const user = User.findOne({ where: { email } });

    if (!user) {
      throw new Error("invalid login");
    }
  }
}
