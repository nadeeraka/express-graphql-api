import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  FindOperator,
  OneToMany,
  BeforeInsert,
} from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";
import { Income } from "./Income";
import { Expense } from "./Expenses";
import { Balance } from "./Balance";
import { Saving } from "./Saving";
import { v4 as uuid } from 'uuid'; 

@ObjectType()
@Entity("users")
export class User extends BaseEntity {
  
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ type: "varchar", length: 230, nullable: true })
  first_name: string;

  @Field(() => String)
  @Column({ type: "varchar", length: 230, nullable: true })
  last_name: string;

  @Field(() => String)
  @Column({ type: "varchar", length: 230, unique: true })
  email: string;

  @Column({ type: "text" })
  password: string;

  @OneToMany(() => Income, (income) => income.user, {
    onDelete: "CASCADE",
  })
  income: Income;

  @OneToMany(() => Expense, (expense) => expense.user, {
    onDelete: "CASCADE",
  })
  expense: Expense;

  @OneToMany(() => Balance, (balance) => balance.user, {
    onDelete: "CASCADE",
  })
  balance: Balance;

  @OneToMany(() => Saving, (saving) => saving.user, {
    onDelete: "CASCADE",
  })
  saving: Saving;

  // @BeforeInsert()
  // addId(){
  //   this.id = uuid()
  // }

}
