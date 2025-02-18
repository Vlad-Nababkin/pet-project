'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Qwest extends Model {
    static associate(models) {
    }
  }
  Qwest.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Qwest',
  });
  return Qwest;
};