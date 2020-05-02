import { Arg, Mutation, Resolver } from "type-graphql";
import { Expense } from '../../models/Expenses';
import { logger } from "../../util/logger";

@Resolver()
export class ExpenseResolver {
  @Mutation(() => Boolean)
  async saveExpense(
    @Arg("note") note: string,
    @Arg("expense_type") expense_type: string,
    @Arg("amount") amount: number
  ) {
    try {
      await Expense.insert({
        note,
        expense_type,
        amount,
      });
    } catch (error) {
      logger("", true, error);
      return false;
    }

    return true;
  }

  // @Query(() => String)
  // @UseMiddleware(isAuth)
  // check(@Ctx() { payload }: Main) {
  //   logger(payload);
  //   return `user id : ${payload?.userId}`;
  // }
  // @Query(() => [Expense])
  // getExpense() {
  //   return Expense.find();
  // }
  // @Query(() => Int)
  // Count() {
  //   return Expense.count();
  // }



  
}
