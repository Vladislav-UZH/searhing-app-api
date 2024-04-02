const { createApp } = require("./app");

async function server(PORT = 5555) {
  try {
    const app = await createApp();
    app.listen(PORT, (e) => {
      if (e) {
        console.error("Server launch failed", e);
        return;
      }
      console.log(`Server running. Use our API on port: ${PORT}`);
      console.log(
        `Server running. Use our API on: http://localhost:${PORT}/api`
      );
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = { server };
