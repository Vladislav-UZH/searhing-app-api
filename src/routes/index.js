const express = require("express");
const { Questions } = require("../controllers/questions");
const router = express.Router();

router.get("/search", Questions.searchResults);

const questionsRouter = router;
module.exports = { questionsRouter };
