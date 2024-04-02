const { SuperRepository } = require("./super");

class QuestionsRepository extends SuperRepository {
  constructor() {
    super("Question");
  }
}

module.exports = { questionsRepository: new QuestionsRepository() };
