'use strict';

module.exports = (sequelize, DataType) => {

    var Checkin = sequelize.define('checkins', {

        'horario_checkin': {
            type: DataType.STRING,
            allowNull: false
        },

        'data_checkin': {
            type: DataType.STRING,
            allowNull: false
        }

    });

    Checkin.associate = (models) => {

        models.checkins.belongsTo(models.membros, {
            onDelete: 'CASCADE',
            foreignKey: {
                allowNull: false
            }
        });

    };

    return Checkin;

};