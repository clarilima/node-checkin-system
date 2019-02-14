'use strict';

module.exports = (sequelize, DataType) => {

    var Membro = sequelize.define('membros', {

        'nome_membro': {
            type: DataType.STRING,
            allowNull: false 
        },

        'contato': {
            type: DataType.STRING
        }

    });

    Membro.associate = (models) => {

        models.membros.belongsTo(models.rebanhos, {
            onDelete: 'CASCADE',
            foreignKey: {
                allowNull: false
            }
        });

    };

    Membro.associate = (models) => {

        models.membros.hasMany(models.checkins);

    };

    return Membro;

};