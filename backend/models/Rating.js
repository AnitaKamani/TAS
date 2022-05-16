const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Rating = sequelize.define("Rating", {
	ID: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	Rate: {
		type: Sequelize.TINYINT,
		allowNull: false,
	},
});

module.exports = Rating;
