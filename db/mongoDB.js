require('dotenv').config();

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString).then(() => {
    console.log("Database connection established...!");
}).catch((err) => {
    console.log("Database connection error: "+err);
})

// const connectDB = async () => {
//     try {
//       const conn = await mongoose.connect(mongoString);
//       console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//       console.log(error);
//       process.exit(1);
//     }
//   }