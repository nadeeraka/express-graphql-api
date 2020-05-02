import {
  getMax,
  getMin,
  sortArray,
  incomeArray,
  getAverage,
  getTotal,
  getPattern,
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

const getObj = (str:string) => {
  switch (str) {
    case "in":
      return Income;

    case "ex":
      return Expense;
      default:
      return Expense;

  }
};

@Resolver()
export class MainQueryResolver {
  @Query(() => Int)
  async getTotal(@Arg("type") type: string,) {
      
    return await getObj(type).count();
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
    return getTotal(income);
  }

  @Query(() => Number)
  async getLagerIncome() {
    const income: number[] = await this.getIncome();
    return getMax(income);
  }
  @Query(() => Number)
  async getMinIncome() {
    const income: number[] = await this.getIncome();
    return getMin(income);
  }

  @Query(() => Number)
  async getAverage() {
    const income: number[] = await this.getIncome();
    return getAverage(income);
  }

  @Query(() => [Number])
  async getSortedIncome() {
    const income: number[] = await this.getIncome();
    return sortArray(income);
  }

  @Query(() => [Number])
  async incomePattern() {
    const income: number[] = await this.getIncome();
    return getPattern(income);
  }
}
