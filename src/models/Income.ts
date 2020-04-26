import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  FindOperator,
  Double,
  ManyToOne,
  BeforeInsert,
} from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";
import {
  EXPENSE_CHOICES,
  INCOME_CHOICES,
  SAVING_CHOICES,
} from "../util/db/enum";
import { User } from "./User";


@ObjectType()
@Entity("incomes")
export class Income extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({type:'varchar',length:200,nullable:true})
  note: string;

  @Field(() => Int)
  @Column({type:'double precision'})
  amount: number;

  @Field(() => Date)
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  date: Date;

  @Field(() => String)
  @Column({type:'varchar',length:200})
  income_type: String;

  @ManyToOne(() => User,user => user.income)
  user: User;

 
}
