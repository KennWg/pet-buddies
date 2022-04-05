const req = require('express/lib/request');
const User = require('./User');
const Pet = require('./Pet');
const Event = require('./Event');

// Association between User and Pet (one-to-many)
User.hasMany(Pet, {
    foreignKey: 'user_id'
}),

Pet.belongsTo(User, {
    foreignKey: 'user_id'
});

// association between User and Event (one-to-many)
User.hasMany(Event, {
    foreignKey: 'user_id'
});

Event.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = {User, Pet, Event};