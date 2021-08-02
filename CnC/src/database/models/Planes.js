const { Model, DataTypes } = require("sequelize");
const sequelize = require('../index');

class Planes extends Model {}
Planes.init(
  {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    montoanual: DataTypes.DOUBLE,
    montomensual: DataTypes.DOUBLE,
  },
  {
    sequelize,
    modelName: "Planes",
  }
);

module.exports = Planes;
