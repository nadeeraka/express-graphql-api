import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  FindOperator,
  Double,
  ManyToOne,
} from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";
import {
  EXPENSE_CHOICES,
  INCOME_CHOICES,
  SAVING_CHOICES,
} from "../util/db/enum";
import { User } from "./User";

@ObjectType()
@Entity("income")
export class Income extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({type:'varchar',length:200,nullable:true})
  note: string;

  @Field(() => Double)
  @Column({type:'double',length:100})
  amount: number;

  @Field(() => Date)
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  date: Date;

  @Field(() => INCOME_CHOICES)
  @Column({
    type: "enum",
    enum: INCOME_CHOICES,
    default: INCOME_CHOICES.SALARY,
  })
  income: INCOME_CHOICES;

  @ManyToOne(type => User, user => user.incomes)
  user: User;


}
