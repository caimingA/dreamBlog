var Sequelize = require("sequelize");
var mysql = require("../link");
var sequelize = mysql.sequelize;
var Blog = sequelize.define('blog_tbl', {

        id:{ //主键
            type:Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type:Sequelize.STRING(100)
        },
        content:{
            type:Sequelize.STRING(2000)
        },
        html:{
            type:Sequelize.STRING(2000)
        },
        date:{
            type:Sequelize.DATE()
        },
        kind:{
            type:Sequelize.STRING(30)
        },
        tag:{
            type:Sequelize.STRING(30)
        },
        contenthead:{
            type:Sequelize.STRING(1000)
        }
    },
    {
        freezeTableName: true
    }
);

module.exports = Blog;