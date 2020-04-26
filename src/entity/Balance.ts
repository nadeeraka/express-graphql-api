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
  @Entity("balances")
  export class Balance extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;
  
   
    @Field(() => Int)
    @Column("decimal", { precision: 7, scale: 4 })
    amount: number;
  
    @Field(() => Date)
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    date: Date;
  
   
    @ManyToOne(() => User,user => user.balance,{
        onDelete: 'CASCADE',
    })
    user: User;
  
  
  }
  