const { Pet } = require('../models');

const petdata = [
    {
        name: 'Bubbles',
        breed: 'Bulldog',
        age: '5',
        size: '8lbs',
        description: 'Cute dog',
        user_id: 1
    },
    {
        name: 'Fido',
        breed: 'Bulldog',
        age: '3',
        size: '7lbs',
        description: 'Quiet dog',
        user_id: 1
    },
    {
        name: 'Rover',
        breed: 'German Shepherd',
        age: '4',
        size: '6lbs',
        description: 'Cute',
        user_id: 2
    },
    {
        name: 'Goldie',
        breed: 'Golden Retriever',
        age: '4',
        size: '8lbs',
        description: 'Adorable',
        user_id: 4
    },
    {
        name: 'Princess',
        breed: 'Poodle',
        age: '2',
        size: '2lbs',
        description: 'Fun',
        user_id: 5
    }
];

const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;