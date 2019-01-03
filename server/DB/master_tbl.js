var Sequelize = require("sequelize");
var mysql = require("../link");
var sequelize = mysql.sequelize;
var Blog = sequelize.define('master_tbl', {

        name:{ //主键
            type:Sequelize.STRING(10),
            primaryKey: true
        },
        age:{
            type:Sequelize.INTEGER(2)
        },
        intro:{
            type:Sequelize.STRING(1000)
        },
        image:{
            type:Sequelize.STRING(100)
        }
    },
    {
        freezeTableName: true
    }
);

module.exports = Blog;