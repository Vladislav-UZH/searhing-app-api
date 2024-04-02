const { SuperModel } = require("./super");

const model = new SuperModel();

const schema = {
  question: { type: String, required: true },
  fromPage: { type: Number, required: true },
  positionOnPage: { type: Number, required: true },
  origPosition: { type: Number, required: true },
  imageUrl: { type: String, required: true },
};

const QuestionModel = model.create("Question", schema);
module.exports = { QuestionModel };
