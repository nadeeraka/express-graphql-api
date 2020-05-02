import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Saving } from "../../models/Saving";
import { logger } from "../../util/logger";
import { Main } from "../../util/types";

//TOdo use dependency injection
//const incomeObj = new IncomeMainClass([])

@Resolver()
export class SavingResolver {
  @Mutation(() => Boolean)
  async saveSaving(
    @Arg("note") note: string,
    @Arg("saving_type") saving_type: string,
    @Arg("amount") amount: number
  ) {
    try {
      await Saving.insert({
        note,
        amount,
        saving_type,
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
