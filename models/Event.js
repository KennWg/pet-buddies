const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model { }

Event.init(
    {

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }

        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        event: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: true,
        underscored: true,
        modelName: 'event'
    }

);

module.exports = Event;