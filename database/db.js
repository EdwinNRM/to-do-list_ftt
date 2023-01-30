const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(
      process.env.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Banco conectado em MongoDB Atlas"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
