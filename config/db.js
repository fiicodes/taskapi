const mongoose = require("mongoose");
const uri = process.env.DB_URL;

exports.connectToDb = () => {
  mongoose
    .connect(process.env.DB_UR, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`connected to db: ${conn.connection.name}`);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
