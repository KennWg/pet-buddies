const req = require('express/lib/request');
const User = require('./User');
const Pet = require('./Pet');
const Event = require('./Event');
const Comment = require('./Comment');

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

// association between Event and Comment (one-to-many)
Event.hasMany(Comment, {
    foreignKey: 'event_id'
});

Comment.belongsTo(Event, {
    foreignKey: 'event_id'
});

// association between user and comment (one-to-many)
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = {User, Pet, Event, Comment};