const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sequelize = new Sequelize(
    'kadosh',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'sqlite',
        logging: false,
        freezeTableName: true,
        operatorsAliases: {
            $and: Op.and,
            $or: Op.or,
            $eq: Op.eq,
            $gt: Op.gt,
            $lt: Op.lt,
            $lte: Op.lte,
            $like: Op.like
        },
        storage: 'kadosh.sqlite'
    }
);

sequelize.authenticate().then(() => {

    console.log("Conexão realizada com sucesso!");

}).catch(error => {

    console.error(`A conexão falhou! Erro: ${error}`);

});

module.exports = sequelize;