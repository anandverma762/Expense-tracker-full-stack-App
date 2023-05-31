const Seq = require('sequelize');

const sequelize = require('../util/database')

const data = sequelize.define('expense',{
    id: {
        type: Seq.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    budget: {
        type: Seq.INTEGER,
        allowNull: false
    },
    desc: {
        type: Seq.TEXT,
        allowNull: false,
        
    },
    catgry: {
        type: Seq.CHAR,
        allowNull: false,
        
    }
  
})

module.exports = data;