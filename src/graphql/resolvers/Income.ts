import {
  Arg,
  Int,
  Mutation,
  Query,
  Resolver,
  registerEnumType,
} from "type-graphql";
import { Income } from "../../models/Income";
import { logger } from "../../util/logger";



@Resolver()
export class IncomeResolver {
  @Mutation(() => Boolean)
  async saveIncome(
    @Arg("note") note: string,
    @Arg("income_type") income_type: string,
    @Arg("amount") amount: number
  ) {
    try {
      await Income.insert({
        note,
        amount,
        income_type,
      });
    } catch (error) {
      logger("", true, error);
      return false;
    }

    return true;
  }

  @Query(() => String)
  home() {
    return "hi";
  }
  @Query(() => [Income])
  users() {
    return Income.find();
  }
  @Query(() => Int)
  userCount() {
    return Income.count();
  }
}
