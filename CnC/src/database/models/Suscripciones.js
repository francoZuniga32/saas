const { Model, DataTypes } = require("sequelize");
const sequelize = require("../index");

class Suscripciones extends Model {}
Suscripciones.init(
  {
    tipo: DataTypes.BOOLEAN,
    fecharegistro: DataTypes.DATE,
    fechacobro: DataTypes.DATE,
    bloquedo: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: "Suscripciones",
  }
);

module.exports = Suscripciones;
