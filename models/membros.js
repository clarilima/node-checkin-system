const Sequelize = require('sequelize');
const sequelize = require('../connection');

const Membro = sequelize.define('membros', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    contato: {
        type: Sequelize.STRING
    },
    fk_id_rebanho: {
        type: Sequelize.INTEGER,
        references: {
            model: 'rebanhos',
            key: 'id_rebanho'
        }
    }
});

// force: true will drop the table if it already exists
Membro.sync({ force: true }).then(() => {

    return Membro.create({
        nome: 'Pedro Alexandre',
        contato: '85 9 8735-2635',
        fk_id_rebanho: 1
    });

});