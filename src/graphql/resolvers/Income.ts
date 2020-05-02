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
import { getMax, getMin, sortArray, incomeArray,getAverage,getTotal } from "../../lib/helpers";

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
    return await (await this.getIncome()).map((a) => a + amount);
  }
  @Query(() => Number)
  async totalIncome() {
    const income: number[] = await this.getIncome();
    return  getTotal(income);
  }

  @Query(() => Number)
  async getLagerIncome() {
    const income: number[] = await this.getIncome();
    return getMax(income);
  }

  @Query(()=>Number)
  async getAverage (){
    const income: number[] = await this.getIncome();
    return getAverage(income)
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
