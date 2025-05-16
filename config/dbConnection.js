const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
//     console.log(
//       `MongoDB Connected, Host: ${connect.connection.host}, DB: ${connect.connection.name}, Port: ${connect.connection.port}`
//     );
//   } catch (err) {
//     console.error("Error connection to database: ", err);
//     process.exit(1);
//   }
// };

const connectDB = async () => {
  await mongoose
    .connect(process.env.DB_CONNECTION_STRING)
    .then((conn) =>
      console.log(
        `🚀 Connected to MongoDB successfully! Host: ${conn.connection.host}, DB: ${conn.connection.name}`
      )
    )
    .catch((error) => console.error("❌ MongoDB connection error:", error));
};

module.exports = connectDB;
