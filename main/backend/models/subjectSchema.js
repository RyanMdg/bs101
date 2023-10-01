import mongoose from "mongoose";
const Schema = mongoose.Schema;

const subjectSchema = new Schema(
  {
    answer: {
      type: String,
      require: true,
    },
    question: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("subjects", subjectSchema);
