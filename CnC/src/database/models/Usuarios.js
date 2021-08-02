const { Model, DataTypes } = require("sequelize");
const sequelize = require("../index");

class Usuarios extends Model {}
Usuarios.init(
  {
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    contrasenia: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Usuarios",
  }
);

module.exports = Usuarios;
