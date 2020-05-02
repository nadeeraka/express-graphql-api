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
import { Main } from "../../util/types";
import { getConnection } from "typeorm";
import { User } from "../../models/User";

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
  //  //  🔖
  //   @Mutation(() => Boolean)
  //   async revokeRefreshTokensForUser(@Arg("userId", () => Int) userId: number) {
  //     await getConnection()
  //       .getRepository(User)
  //       .increment({ id: userId }, "tokenVersion", 1);

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
  @Query(() => [Income])
  async getIncomeArray() {
    return await Income.find();
  }
  @Query(() => Int)
  async getTotalIncome() {
    return await Income.count();
  }
  @Query(() => [Number])
  async getIncome() {
    const incomeArray = Income.find();
    const arr = await Income.find();
    const valArr: number[] = arr.map((data) => data.amount);
    return valArr;
  }
  @Query(() => [Number])
  async getAmountsWithValue(amount: number) {
    const arr = await Income.find();
    const valArr: number[] = arr.map((data) => data.amount + amount);
    return valArr;
  }
  @Query(() => Number)
  async totalIncome() {
    const arr = await Income.find();
    const subTotal: number = arr
      .map((data) => data.amount)
      .reduce((a, b) => a + b);
    return subTotal;
  }
}
