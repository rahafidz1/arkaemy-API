import { Sequelize } from "sequelize";

const db = new Sequelize("arkademy", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
