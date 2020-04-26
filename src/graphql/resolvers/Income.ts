import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { hash } from "bcryptjs";
import { Income } from "../../entity/Income";
import { logger } from "../../util/logger";
import {ResolverMap} from '../../util/types'
import { EnumConfig } from "type-graphql/dist/decorators/types";

@Resolver()
export class IncomeResolver {
    @Mutation(()=>Boolean) 
  async saveIncome(
    @Arg("note") note: string,
    //@Arg("income_type") income_type: any,
    @Arg("amount") amount:number
  ) {
try {
    await Income.insert({
        note,amount
    })

} catch (error) {
    console.log(error)
return false    
}  
    
    return true;
  }

  @Query(() => String)
  home() {
    return "hi";
  }
  @Query(()=>[Income])
  users(){
      return Income.find()
  }
 @Query(()=>Int)
 userCount(){
   return Income.count()

  
  
 }
}
