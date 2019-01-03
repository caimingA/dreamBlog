var Sequelize = require("sequelize");
var mysql = require("../link");
var sequelize = mysql.sequelize;
var speaking = sequelize.define('blog_tbl', {

        id:{ //主键
            type:Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },

        content:{
            type:Sequelize.STRING(2000)
        }

    },
    {
        freezeTableName: true
    }
);

module.exports = speaking;