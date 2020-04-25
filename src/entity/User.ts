import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  FindOperator,
} from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
@Entity("users")
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;
  @Field(() => String)
  @Column()
  email: string;

  @Column()
  password: string;
}
