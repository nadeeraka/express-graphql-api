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
  @Column({ type: "varchar", length: 230, nullable:true })
  first_name: string;

  @Field(() => String)
  @Column({ type: "varchar", length: 230,nullable:true })
  last_name: string;

  @Field(() => String)
  @Column({ type: "varchar", length: 230, unique: true })
  email: string;

  @Column({ type: "text" })
  password: string;
}
