const mongoose = require('mongoose');
const Tree = require('../models/treeModel');
// const { faker } = require('@faker-js/faker');

const mongoUri = 'mongodb://127.0.0.1:27017/tree';
mongoose.connect(mongoUri, {}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
    process.exit(1);
});

async function seedTrees() {
    try {
        await Tree.deleteMany({});
        const trees = [];
        for (let i = 1; i <= 10; i++) {
            trees.push({
                name: `Tree ${i}`,
                description: `Description for Tree ${i}`,
                image: `https://example.com/images/tree${i}.jpg`,
            });
        }

        await Tree.insertMany(trees);
        console.log('Seeded trees successfully');
    } catch (error) {
        console.error('Error seeding trees:', error);
    } finally {
        await mongoose.connection.close();
    }
}

seedTrees();