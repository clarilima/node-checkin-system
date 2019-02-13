const Sequelize = require('sequelize');
const sequelize = require('../connection');

const Checkin = sequelize.define('checkins', {
    horario_checkin: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    data_checkin: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    fk_id_membro: {
        type: Sequelize.INTEGER,
        references: {
            model: 'membros',
            key: 'id_membro'
        }
    }
});

// force: true will drop the table if it already exists
Checkin.sync({ force: true }).then(() => {

    return Checkin.create({
        horario_checkin: new Date().toLocaleDateString('pt-br'),
        data_checkin: new Date().toLocaleTimeString('pt-br'),
        fk_id_membro: 1
    });

});