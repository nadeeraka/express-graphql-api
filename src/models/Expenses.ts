import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
  
  @ObjectType()
  @Entity("expenses")
  export class Expense extends BaseEntity {
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
    @Column({ type:'varchar', length:100  })
    expense_type: string;
  
    @ManyToOne(() => User,user => user.expense,{
        onDelete: 'CASCADE',
    })
    user: User;
  
  
  }
  