import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PWD,
  database: "ways_tn",
  synchronize: true,
  logging: true,
  entities: ["backend/entity/**/*.ts"],
  migrations: [],
  subscribers: [],
});

export const { manager } = AppDataSource;
