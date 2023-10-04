import React, { useEffect, useState } from "react";
import axios from "axios";
import "../globals.css";

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const ComprogReviewer = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [handouts, setHandouts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAnswer1, setShowAnswer1] = useState(false);

  useEffect(() => {
    axios
      .get("https://flashcardsbs101.onrender.com/flashcard/getFlashCard")
      .then((response) => {
        // Filtering comprog sub
        const computerProgrammingFlashcards = response.data.filter(
          (flashcard) =>
            flashcard.subjects === "Computer Programming" &&
            flashcard.handouts === 1
        );

        const computerProgrammingHandouts = response.data.filter(
          (handouts) =>
            handouts.handouts === 2 &&
            handouts.subjects === "Computer Programming"
        );

        // random fetch
        const shuffledFlashcards = shuffleArray(computerProgrammingFlashcards);
        const shuffledHandouts = shuffleArray(computerProgrammingHandouts);

        setFlashcards(shuffledFlashcards);
        setHandouts(shuffledHandouts);
      })
      .catch((error) => {
        console.error("Error fetching flashcards:", error);
      });
  }, []);

  const nextFlashcard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setShowAnswer(false);
  };

  const nextFlashcard2 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex + 1) % handouts.length);
    setShowAnswer(false);
  };

  const flipCard = () => {
    setShowAnswer(!showAnswer);
  };
  const flipCard1 = () => {
    setShowAnswer1(!showAnswer1);
  };

  return (
    <div>
      <h2 className="text-center mt-4 uppercase font-extrabold">Midterms</h2>
      <br />
      <div className="mx-7 pb-7 border border-black mt-5 bg-[#f7eee6]  shadow-2xl rounded-lg pt-5 px-3">
        <h1 className="uppercase font-extrabold">Handout 1</h1>
        <ul className="list-inside list-disc">
          <li className="font-semibold underline">
            {" "}
            <a href="https://drive.google.com/file/d/15A0klpdQ3hsXGXUz0FyKRFngmYM7a4T6/view?usp=sharing">
              Handout Link
            </a>
          </li>
        </ul>
        <div className="relative mt-5">
          <div
            className={`w-full h-auto max-h-40 p-4 bg-[#3B82F6] inner-shadow flex items-center justify-center rounded-lg shadow-md cursor-pointer`}
            onClick={flipCard}
          >
            <p className="text-[1rem] px-1 overflow-auto text-white font-semibold">
              {showAnswer
                ? `Answer : ${flashcards[currentIndex]?.answer}`
                : flashcards[currentIndex]?.question}
            </p>
          </div>
        </div>
        <div className=" flex justify-center mt-2  ">
          <button
            className=" text-center bg-[#566AB3] px-3 rounded-md   text-white font-semibold "
            onClick={nextFlashcard}
          >
            Next
          </button>
        </div>
      </div>

      {/* HANDOUT 2 */}
      <div className="mx-7 pb-3 border border-black mt-5 bg-[#f7eee6] mb-5  shadow-2xl rounded-lg pt-5 px-3">
        <h1 className="uppercase font-extrabold">Handout 2</h1>
        <ul className="list-inside list-disc">
          <li className="font-semibold underline">
            <a href="https://drive.google.com/file/d/1L2EyrP_ib9y91SQj11pZmQejWtjUfSZv/view?usp=sharing">
              Handout Link
            </a>
          </li>
        </ul>
        <div className="relative mt-5">
          <div
            className={`w-full h-auto max-h-40 p-4 bg-[#3B82F6] inner-shadow flex items-center justify-center rounded-lg shadow-md cursor-pointer`}
            onClick={flipCard1}
          >
            <p className="text-[1rem] px-1 overflow-auto text-white font-semibold">
              {showAnswer1
                ? handouts[currentIndex1]?.answer
                : handouts[currentIndex1]?.question}
            </p>
          </div>
        </div>
        <div className=" flex justify-center mt-2  ">
          <button
            className=" text-center bg-[#566AB3] px-3 rounded-md   text-white font-semibold "
            onClick={nextFlashcard2}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComprogReviewer;
