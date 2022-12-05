import "reflect-metadata";
import { DataSource } from "typeorm";

const PROD_DATA_SOURCE = {
  username: process.env.PROD_DB_USERNAME,
  password: process.env.PROD_DB_PASSWORD,
  database: "postgres",
  url: process.env.PROD_DB_URL,
};

const DEV_DATA_SOURCE = {
  host: "localhost",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PWD,
  database: "ways_tn",
  url: process.env.PROD_DB_URL,
};

export const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  synchronize: true,
  logging: true,
  entities: ["backend/entity/**/*.ts"],
  migrations: [],
  subscribers: [],
  ...PROD_DATA_SOURCE,
  // ...(process.env.NODE_ENV !== "production"
  //   ? DEV_DATA_SOURCE
  //   : PROD_DATA_SOURCE),
});

export const { manager } = AppDataSource;
