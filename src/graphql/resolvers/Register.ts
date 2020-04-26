import { Resolver, Mutation, Arg } from "type-graphql";
import { hash } from "bcryptjs";
import { User } from "../../models/User";
import { logger } from "../../util/logger";

@Resolver()
export class RegisterResolver {

@Mutation(() => Boolean)
async register(
  @Arg("email") email: string,
  @Arg("password") password: string
) {
  const hashPassword = await hash(password, 12);

  try {
    await User.insert({
      email,
      password: hashPassword,
    });
  } catch (error) {
    logger("", true, error);
    return false;
  }
  return true;
}

}