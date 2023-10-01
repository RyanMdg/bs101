import subjectSchema from "../models/subjectSchema.js";

// Post New FlashCard
const flashcardAdd = async (req, res) => {
  try {
    const { answer, question } = req.body;

    const subject = await subjectSchema.create({
      answer,
      question,
    });
    res.status(200).json(subject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  flashcardAdd,
};
