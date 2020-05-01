import {
  Arg,
  Int,
  Mutation,
  Query,
  Resolver,
  registerEnumType,
  Ctx,
} from "type-graphql";
import { Income } from "../../models/Income";
import { logger } from "../../util/logger";
import { Main } from "src/util/types";
import { getConnection } from "typeorm";
import { User } from "../../models/User";



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
 //  🔖
  @Mutation(() => Boolean)
  async revokeRefreshTokensForUser(@Arg("userId", () => Int) userId: number) {
    await getConnection()
      .getRepository(User)
      .increment({ id: userId }, "tokenVersion", 1);

    return true;
  }

  @Query(() => String)
 
  check(@Ctx() { payload }: Main) {
    logger(payload);
    return `user id : ${payload?.userId}`;
  }
  home() {
    return "hi";
  }
  @Query(() => [Income])
  getIncomeArray() {
    return Income.find();
  }
  @Query(() => Int)
  getTotalIncome() {
    return Income.count();
  }
  @Query(() => [Income])
  getIncome() {
    //const incomeArray = Income.;
    //return incomeArray;
    //const sortedArray = incomeArray.map(())
  }
}
