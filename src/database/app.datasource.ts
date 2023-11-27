import { postEntity } from "@database/entity/post.entity";
import { DataSource } from "typeorm";

const appDataSource: DataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [postEntity],
  synchronize: true,
  logging: false,
  extra: {
    connectionLimit: 5
  }
});

export default appDataSource;
