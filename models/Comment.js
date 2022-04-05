const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        event_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'event',
                key: id
            }
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: null,
            autoIncrement: true,
            primaryKey: true
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: true,
        modelName: 'comment'
    }

)

module.exports = Comment;