// models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const Transaction = sequelize.define('Transaction', {
    order_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,  
        defaultValue: function () {
            return Math.floor(1000 + Math.random() * 9000).toString();
        }
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    timestamp: {
        type: DataTypes.STRING,
        allowNull: false, 
        defaultValue: function () {
            return new Date().toISOString(); // belum di set ke waktu indonesia 
        }
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

const Wallet = sequelize.define('Wallet', {
    balance: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
    }
});

sequelize.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
});

module.exports = {
    Transaction,
    Wallet,
    sequelize
};
