import React, { useState } from "react";
import Navbar from "../src/app/components/navbar";
import axios from "axios"; // Import Axios

const Flashcard = () => {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/flashcard/addFlashCard",
        { answer, question }
      );

      if (response.status === 200) {
        console.log("Flashcard added successfully");
      } else {
        console.error("Failed to add flashcard");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-5 font-semibold">Add Flashcards</h1>
      <form
        onSubmit={handleSubmit}
        className="border rounded-lg border-[#6666] mx-5 flex flex-col items-center gap-2 pt-2 shadow-lg"
      >
        <div className="mb-4">
          <input
            type="text"
            name="answer"
            placeholder="Answer"
            value={answer}
            onChange={handleAnswerChange}
            className="border  rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="question"
            placeholder="Question"
            value={question}
            onChange={handleQuestionChange}
            id=""
            cols="30"
            rows="10"
            className="border rounded-sm placeholder:p-3 focus:outline-none focus:ring focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Flashcard;
