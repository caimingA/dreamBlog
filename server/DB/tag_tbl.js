var Sequelize = require("sequelize");
var mysql = require("../link");
var sequelize = mysql.sequelize;
var Blog = sequelize.define('tag_tbl', {

        tagId:{ //主键
            type:Sequelize.STRING(10),
            primaryKey: true,
        },
        tag:{
            type:Sequelize.STRING(10)
        }
    },
    {
        freezeTableName: true
    }
);

module.exports = Blog;