import React, { useState } from "react";
import Navbar from "../src/app/components/navbar";
import axios from "axios"; // Import Axios

const Flashcard = () => {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [inputErrorMessage, setInputErrorMessage] = useState("");

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!answer || !question) {
      setInputErrorMessage("Please fill in both fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/flashcard/addFlashCard",
        { answer, question }
      );

      if (response.status === 200) {
        setIsSuccessModalOpen(true);
        setAnswer("");
        setQuestion("");
        setInputErrorMessage(""); // Clear the error message
      } else {
        console.error("Failed to add flashcard");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
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
            className={`border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 ${
              inputErrorMessage && !answer ? "border-red-500" : ""
            }`}
          />
          {inputErrorMessage && !answer && (
            <p className="text-red-500 text-sm">Please fill this field.</p>
          )}
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
            className={`border rounded-sm placeholder:p-3 focus:outline-none focus:ring focus:border-blue-500 ${
              inputErrorMessage && !question ? "border-red-500" : ""
            }`}
          ></textarea>
          {inputErrorMessage && !question && (
            <p className="text-red-500 text-sm">Please fill this field.</p>
          )}
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

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-md">
            <p className="text-green-500 font-semibold">
              Flashcard added successfully!
            </p>
            <button
              onClick={closeSuccessModal}
              className="bg-[#3B82F6] rounded-md px-3 font-semibold text-white mt-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
