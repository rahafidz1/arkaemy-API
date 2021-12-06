import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Produk = db.define(
  "produk",
  {
    nama_produk: { type: DataTypes.STRING },
    keterangan: { type: DataTypes.STRING },
    harga: { type: DataTypes.INTEGER },
    jumlah: { type: DataTypes.INTEGER },
  },
  {
    freezeTableName: true,
  }
);

export default Produk;
