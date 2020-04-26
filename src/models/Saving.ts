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
  @Entity("savings")
  export class Saving extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;
  
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
    @Column({
      type: "enum",
      enum: SAVING_CHOICES,
      default: SAVING_CHOICES.BANK,
    })
    expense: SAVING_CHOICES;
  
    @ManyToOne(() => User,user => user.saving,{
        onDelete: 'CASCADE',
    })
    user: User;
  
  
  }
  