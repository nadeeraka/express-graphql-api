import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Income } from "../../models/Income";
import { logger } from "../../util/logger";
import { Main } from "../../util/types";

//TOdo use dependency injection
//const incomeObj = new IncomeMainClass([])

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
  check(@Ctx() { payload }: Main) {
    logger(payload);
    return `user id : ${payload?.userId}`;
  }
  home() {
    return "hi";
  }
  
}
//  //  🔖
  //   @Mutation(() => Boolean)
  //   async revokeRefreshTokensForUser(@Arg("userId", () => Int) userId: number) {
  //     await getConnection()
  //       .getRepository(User)
  //       .increment({ id: userId }, "tokenVersion", 1);

  //     return true;
  //   }
