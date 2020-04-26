import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { hash } from "bcryptjs";
import { Income } from "../../entity/Income";
import { logger } from "../../util/logger";
import {ResolverMap} from '../../util/types'

@Resolver()
export class UserResolver {
    @Mutation(()=>Object) 
  async register(
    @Arg("note") note: string,
   // @Arg("income_type") income_type: string,
    @Arg("amount") amount:number
  ) {
try {
    await Income.insert({
        note,amount
    })
    
} catch (error) {
    
}  
    
    return {};
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
