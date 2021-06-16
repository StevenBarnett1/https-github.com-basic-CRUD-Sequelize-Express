const Sequelize = require("sequelize")
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./data/testDB"
})
const queryInterface = sequelize.getQueryInterface();
queryInterface.createTable("users", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
})

const User = sequelize.define("user", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { timestamps: false })

module.exports = User
