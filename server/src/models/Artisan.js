module.exports = (sequelize, DataTypes) => {
    const Artisan = sequelize.define('Artisan', {
        name: DataTypes.STRING,
        metier: DataTypes.STRING,
        email:{
            type: DataTypes.STRING,
            unique: true
        },
        phone: DataTypes.STRING,
        password: DataTypes.STRING,
        region: DataTypes.STRING
    })
    return Artisan
}