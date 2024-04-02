const cloudinary = require("cloudinary").v2;
const {
  CLOUDINARY_API_KEY,
  CLOUDINARY_NAME,
  CLOUDINARY_SECRET,
} = require("../config");

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_SECRET,
});
async function getListOfImages() {
  try {
    const { total_count: totalCount, resources } = await cloudinary.search
      .expression("folder:questions")
      .sort_by("public_id", "asc")
      .max_results(65)
      .execute();

    return {
      totalCount,
      images: resources.map(({ public_id, secure_url }) => ({
        public_id,
        secure_url,
      })),
    };
  } catch (e) {
    console.log(e);
  }
}
module.exports = { getListOfImages };
