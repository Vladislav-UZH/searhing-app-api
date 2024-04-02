const { connectDb } = require("./database/connection");
const { server } = require("./server");
async function execute() {
  await connectDb();

  await server();
}
execute();
