const { getListOfImages } = require("../../adapters/cloudinary");
const { questionsRepository } = require("../../repositories/questions");
const { connectDb } = require("../connection");
const dump = require("../static/dump");

function extractPage(str) {
  return +str
    .split("-")
    .filter((el) => el.match(/^\d/))[0]
    .split("_")[0];
}

async function insertInBatches(dataArray, batchSize) {
  for (let i = 0; i < dataArray.length; i += batchSize) {
    const batch = dataArray.slice(i, i + batchSize);
    await questionsRepository.createMany(batch);

    console.log(`Batch ${i / batchSize + 1} inserted successfully`);
  }
  console.log("ALL DOCS HAVE INSERTED");
}

async function main() {
  await connectDb();
  const { totalCount, images } = await getListOfImages();
  const adaptedImgs = images.map(({ secure_url, public_id }) => {
    const page = extractPage(public_id);
    return {
      secure_url,
      public_id,
      page,
    };
  });

  const data = dump.map(
    ({ question, fromPage, origPosition, positionOnPage }) => {
      const img = adaptedImgs.find(({ page }) => page === fromPage);

      const data = {
        question,
        fromPage,
        origPosition,
        positionOnPage,
        imageUrl: img.secure_url,
      };
      return data;
    }
  );

  //   await questionsRepository.create(data[0]);
  await insertInBatches(data, 5);
  process.exit(1);
  //   console.log(res);
}

main();
