import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Interest } from "./Interest";

@Entity()
export class Plan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  details: string;

  @Column("varchar")
  user: string;

  @OneToMany(() => Interest, (interest) => interest.plan)
  interests: Interest[];
}
