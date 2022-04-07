const sequelize = require("../config/connection");

const seedUsers = require('./user-seeds');
const seedPets = require('./pet-seeds');
const seedEvents = require('./event-seeds');
const seedComments = require('./comment-seeds');

const seedAll = async () => {
    await sequelize.sync({force:true});
    await seedUsers();
    console.log('Seeding Users')
    await seedPets();
    console.log('Seeding Pets')
    await seedEvents();
    console.log('Seeding Events')
    await seedComments();
    console.log('Seeding Comments')
    process.exit(0);
};

seedAll();