'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Administrador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Administrador.belongsTo(models.Persona)
    }
  };
  Administrador.init({
    descripcion: DataTypes.STRING,
    password: DataTypes.STRING,
    nombreUsuario: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Administrador',
  });
  return Administrador;
};