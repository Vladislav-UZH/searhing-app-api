require("dotenv").config();

module.exports = {
  DB_URI: process.env.DB_URI,
  //
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_URL: process.env.CLOUDINARY_URL,
  CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET,
};
