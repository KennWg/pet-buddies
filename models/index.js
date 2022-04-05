const req = require('express/lib/request');
const User = require('./User');
const Pet = require('./Pet');

// Association between User and Pet (one-to-many)
User.hasMany(Pet, {
    foreignKey: 'user_id'
}),

Pet.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = {User, Pet};