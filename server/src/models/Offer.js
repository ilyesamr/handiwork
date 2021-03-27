module.exports = (sequelize, DataTypes) => {
    const Offer = sequelize.define('Offer', {
        client_name: DataTypes.STRING,
        client_email: DataTypes.STRING,
        client_id: DataTypes.INTEGER,
        reservation_date: DataTypes.STRING,
        artisan_name: DataTypes.STRING,
        artisan_metier: DataTypes.STRING,
        artisan_phone: DataTypes.STRING,
        artisan_id: DataTypes.INTEGER,
    })
    return Offer
}