import {
  getMax,
  getMin,
  sortArray,
  incomeArray,
  getAverage,
  getTotal,
  getPattern,
  getObj,
} from "../../lib/helpers";
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
import { Expense } from "../../models/Expenses";
import { Saving } from "../../models/Saving";
@Resolver()
export class MainQueryResolver {
  @Query(() => Int)
  async getCount(@Arg("type") type: string) {
    return await getObj(type).count();
  }
  @Query(() => [Number])
  async getAmountArray(@Arg("type") type: string) {
    //const incomeArray = getObj(type).find();
    const arr = await getObj(type).find();
    const valArr: number[] = arr.map((data) => data.amount);
    return valArr;
  }
  @Query(() => [Number])
  async getAmountsWithValue(
    @Arg("type") type: string,
    @Arg("amount") amount: number
  ) {
    return await (await this.getAmountArray(type)).map((a) => a + amount);
  }
  @Query(() => Number)
  async getTotal(@Arg("type") type: string) {
    const value: number[] = await this.getAmountArray(type);
    return getTotal(value);
  }

  @Query(() => Number)
  async getMaxValue(@Arg("type") type: string) {
    const value: number[] = await this.getAmountArray(type);
    return getMax(value);
  }
  @Query(() => Number)
  async getMinValue(@Arg("type") type: string) {
    const value: number[] = await this.getAmountArray(type);
    return getMin(value);
  }

  @Query(() => Number)
  async getAverage(@Arg("type") type: string) {
    const income: number[] = await this.getAmountArray(type);
    return getAverage(income);
  }

  @Query(() => [Number])
  async getSortedArray(@Arg("type") type: string) {
    const value: number[] = await this.getAmountArray(type);
    return sortArray(value);
  }

  @Query(() => [Number])
  async getPattern(@Arg("type") type: string) {
    const value: number[] = await this.getAmountArray(type);
    return getPattern(value);
  }

  @Query(() => Number)
  async getBalance() {
    const incomeArray: number[] = await this.getAmountArray("in");
    const expenseArray: number[] = await this.getAmountArray("ex");
    const savingArray: number[] = await this.getAmountArray("sa");
    return (
      getTotal(incomeArray) - (getTotal(expenseArray) + getTotal(savingArray))
    );
  }
}
