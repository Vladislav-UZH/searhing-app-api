const mongoose = require("mongoose");
const { DB_URI } = require("../config");

async function connectDb() {
  try {
    await mongoose.connect(DB_URI, {});
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  } catch (e) {
    console.log("DATABASE ERR: ", e);
  }
}
module.exports = { connectDb };
