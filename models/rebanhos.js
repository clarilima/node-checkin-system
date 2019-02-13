const Sequelize = require('sequelize');
const sequelize = require('../connection');

const Rebanho = sequelize.define('rebanhos', {

    nome_rebanho: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    qtd_membros: {
        type: Sequelize.INTEGER
    }

});

Rebanho.sync({ force: true }).then(() => {

    return Rebanho.create({
        nome_rebanho: 'Berith',
        qtd_membros: 13
    });

});