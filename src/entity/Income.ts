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
import { v4 as uuid } from 'uuid'; 

@ObjectType()
@Entity("incomes")
export class Income extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column({type:'varchar',length:200,nullable:true})
  note: string;

  @Field(() => Int)
  @Column("decimal", { precision: 7, scale: 4 })
  amount: number;

  @Field(() => Date)
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  date: Date;

  @Field(() => String)
  @Column({type:'varchar',length:200})
  income_type: String;

  @ManyToOne(() => User,user => user.income)
  user: User;

  @BeforeInsert()
  addId(){
    this.id = uuid()
  }

}
