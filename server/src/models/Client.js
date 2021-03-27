module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        name: DataTypes.STRING,
        email:{
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        metier: DataTypes.STRING
    })
    return Client
}