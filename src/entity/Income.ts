import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    FindOperator,
  } from "typeorm";
  import { ObjectType, Field, Int } from "type-graphql";
  
  @ObjectType()
  @Entity("incomes")
  export class Income extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;
    @Field(() => String)
    @Column()
    email: string;
  
    @Column()
    password: string;
  }
  