const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tejeshs2004_db_user:database123@cluster0.f8eifpo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("DB  Connected");
  } catch (error) {
    console.error("Error! ", error.message);
  }
};

module.exports = connection;
