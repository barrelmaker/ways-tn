import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Plan } from "./Plan";

@Entity()
export class Interest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  planId: number;
  @JoinColumn()
  plan: Plan;

  @Column("varchar")
  user: string;
}
