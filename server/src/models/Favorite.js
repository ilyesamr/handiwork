module.exports = (sequelize, DataTypes) => {
    const Favorite = sequelize.define('Favorite', {
        client_name: DataTypes.STRING,
        client_email: DataTypes.STRING,
        client_id: DataTypes.INTEGER,
        artisan_name: DataTypes.STRING,
        artisan_metier: DataTypes.STRING,
        artisan_phone: DataTypes.STRING,
        artisan_id: DataTypes.INTEGER,
    })
    return Favorite
}