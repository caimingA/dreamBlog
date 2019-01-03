var Sequelize = require('sequelize');
var sequelize = new Sequelize(
    'blog',
    'root',
    '',
    {
        host: 'localhost',
        port: '3306',
        dialect: 'mysql',
        define: {
            underscored: false,
            timestamps: false,
            paranoid: true
        }
    }
);
exports.sequelize =  sequelize;