require('dotenv').config();

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString).then(() => {
    console.log("Database connection established...!");
}).catch((err) => {
    console.log("Database connection error: "+err);
})