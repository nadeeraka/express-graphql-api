import {
    Arg,
    Int,
    Mutation,
    Query,
    Resolver,
    registerEnumType,
  } from "type-graphql";
  import { logger } from "../../util/logger";
import { Expense } from "src/models/Expenses";
  
  
  
  @Resolver()
  export class ExpenseResolver {
    @Mutation(() => Boolean)
    async saveIncome(
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
  
    @Query(() => String)
    home() {
      return "hi";
    }
    @Query(() => [Expense])
    getExpense() {
      return Expense.find();
    }
    @Query(() => Int)
    Count() {
      return Expense.count();
    }
  }
  