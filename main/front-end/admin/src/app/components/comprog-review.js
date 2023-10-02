import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ComprogReviewer = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    // Fetch flashcards data from your API for the "computer programming" category.
    axios
      .get("https://flashcardsbs101.onrender.com/flashcard/getFlashCard")
      .then((response) => {
        setFlashcards(response.data);
      })
      .catch((error) => {
        console.error("Error fetching flashcards:", error);
      });
  }, []);

  const nextFlashcard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setShowAnswer(false);
  };

  const flipCard = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div>
      <h2 className="text-center mt-3">Midterms</h2>
      <br />
      <div className="mx-5 mt-5 bg-[#FFF7F0] pb-7 shadow-2xl rounded-lg pt-5 px-3">
        <h1 className="uppercase font-extrabold">Handouts 1</h1>
        <ul className="list-inside list-disc">
          <li className=" font-semibold underline">Data types</li>
          <li>Topic 2</li>
          <li>Topic 3</li>
        </ul>
        <div className="relative mt-5  ">
          <button
            className="absolute top-1/2 text-[2rem] transform -translate-y-1/2 right-2 text-black hover:text-gray-800"
            onClick={nextFlashcard}
          >
            &#8250;
          </button>
          <motion.div
            key={flashcards[currentIndex]?._id}
            initial={{ opacity: 0, rotateY: -180 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className={`w-full h-40 p-4 bg-[#3B82F6] flex items-center justify-center  rounded-lg shadow-md cursor-pointer ${
              showAnswer ? "rotate-y-180" : ""
            }`}
            onClick={flipCard}
          >
            <p className="text-[1rem]  text-white font-semibold">
              {showAnswer
                ? flashcards[currentIndex]?.answer
                : flashcards[currentIndex]?.question}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComprogReviewer;
