import "reflect-metadata";

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Post" })
class postEntity {
  @PrimaryGeneratedColumn("increment")
  public id?: number;

  @Column({
    type: "varchar",
    unique: true
  })
  public title!: string;

  @Column({
    type: "varchar"
  })
  public author!: string;

  @Column({
    type: "varchar",
    nullable: true
  })
  public content!: string;
}

export { postEntity };
