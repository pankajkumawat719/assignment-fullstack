const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");
const Store = require("./Store");

const Rating = sequelize.define("Rating", {
  rating: DataTypes.INTEGER,
  comment: DataTypes.STRING,
});

User.hasMany(Rating);
Rating.belongsTo(User);

Store.hasMany(Rating);
Rating.belongsTo(Store);

module.exports = Rating;
