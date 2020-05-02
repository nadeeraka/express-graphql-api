import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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
  income_type: string;

  @ManyToOne(() => User,user => user.income)
  user: User;

 
}
