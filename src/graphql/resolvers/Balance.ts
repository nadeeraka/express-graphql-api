import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Balance } from "../../models/Balance";
import { logger } from "../../util/logger";
import { Main } from "../../util/types";

//TOdo use dependency injection
//const incomeObj = new IncomeMainClass([])

@Resolver()
export class BalanceResolver {
//   @Mutation(() => Boolean)
//   async saveBalance(@Arg("amount") amount: number) {
//     try {
//       await Balance.insert({
//         amount,
//       });
//     } catch (error) {
//       logger("", true, error);
//       return false;
//     }

//     return true;
//   }

  @Query(() => String)
  check(@Ctx() { payload }: Main) {
    logger(payload);
    return `user id : ${payload?.userId}`;
  }
  home() {
    return "hi";
  }
}
