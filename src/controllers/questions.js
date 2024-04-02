const { questionsService } = require("../services/questions");

class Questions {
  static async getImage(req, res, next) {
    res.status(200).json({});
  }
  static async searchResults(req, res, next) {
    const { query } = req;
    const response = await questionsService.searchResults(query);

    res.status(200).json({ data: response });
  }
}

module.exports = { Questions };
