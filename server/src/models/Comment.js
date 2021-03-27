module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        client_name: DataTypes.STRING,
        client_id: DataTypes.INTEGER,
        artisan_name: DataTypes.STRING,
        artisan_id: DataTypes.INTEGER,
        comment: DataTypes.STRING
    })
    return Comment
}