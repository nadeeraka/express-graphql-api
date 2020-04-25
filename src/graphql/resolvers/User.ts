import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { hash } from "bcryptjs";
import { User } from "../../entity/User";
import { logger } from "../../util/logger";

@Resolver()
export class UserResolver {
  @Query(() => String)
  home() {
    return "hi";
  }
  @Query(()=>[User])
  users(){
      return User.find()
  }
 @Query(()=>Int)
 userCount(){
   return User.count()
 }
}
