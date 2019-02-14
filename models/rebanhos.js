'use strict';

module.exports = (sequelize, DataType) => {

    var Rebanho = sequelize.define('rebanhos', {

        'nome_rebanho': {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        'qtd_membros': {
            type: DataType.INTEGER.UNSIGNED
        }

    });

    Rebanho.associate = (models) => {

        models.rebanhos.hasMany(models.membros);

    };
    
    return Rebanho;
};