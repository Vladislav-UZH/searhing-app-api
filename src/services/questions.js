const { questionsRepository } = require("../repositories/questions");

class QuestionsService {
  async searchResults({ question }) {
    if (!question) {
      return [];
    }
    const docs = await questionsRepository.find({
      $text: {
        $search: question,
      },
    });
    const serializedQuestion = question.toLowerCase();
    const response = {
      data: docs.filter((doc) =>
        doc.question.toLowerCase().includes(serializedQuestion)
      ),
      total: docs.length,
    };
    return response;
  }
}

module.exports = { questionsService: new QuestionsService() };
