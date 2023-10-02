import subjectSchema from "../models/subjectSchema.js";

// Answer and Question list
const getFlashCard = (req, res) => {
  subjectSchema
    .find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Post New FlashCard
const flashcardAdd = async (req, res) => {
  try {
    const { answer, question, subjects } = req.body;

    const subject = await subjectSchema.create({
      answer,
      question,
      subjects,
    });
    res.status(200).json(subject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  flashcardAdd,
  getFlashCard,
};
