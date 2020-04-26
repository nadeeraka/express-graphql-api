import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { hash } from "bcryptjs";
import { User } from "../../models/User";
import { logger } from "../../util/logger";
import {ResolverMap} from '../../util/types'

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
