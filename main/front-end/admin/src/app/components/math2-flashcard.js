import React, { useEffect, useState } from "react";
import "../math.css";


import axios from "axios";

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const MathFlashCards = () => {
    const [mathFlashcard, setFlashcards] = useState([]);

    useEffect(() => {
        axios
        .get("https://flashcardsbs101.onrender.com/flashcard/getFlashCard")
        .then((response) => {
            // Filtering math
            const mathcards = response.data.filter(
            (flashcard) =>
                flashcard.subjects === "Math" &&
                flashcard.handouts === 1
            );
            console.log(mathcards);
            // random fetch
            const shuffledFlashcards = shuffleArray(mathcards);
            setFlashcards(shuffledFlashcards);
        })
        .catch((error) => {
            console.error("Error fetching flashcards:", error);
        });
    }, []);

  const Flashcard = () => {
    const [effect, setEffect] = useState(false);
    const [effect1, setEffect1] = useState(false);
    let clickCounter = 0;
    return (
      <div className="flex flex-row mt-10 justify-center select-none">
        {mathFlashcard.map((flashcard) => (
          <div className="mb-10 group h-60 w-40 [perspective:500px]">
            <div
              className={`${
                effect && "[transform:rotateY(180deg)]"
              } transition-all duration-500 [transform-style:preserve-3d] bg-slate-100 h-full w-full rounded-xl shadow-xl`}
              onClick={() => {
                if (clickCounter === 0) {
                  setEffect(true);
                  clickCounter = 1;
                } else {
                  clickCounter = 0;
                }
              }}
              onAnimationEnd={() => {
                setEffect(false);
              }}
            >
              <div className="text-center absolute inset-0 text-10vw font-medium">
                <p className="mt-10 px-5">{flashcard.question}</p>
              </div>
              <div
                className={`${
                  effect &&
                  "bg-blue-400 [backface-visibility:visible] [transform:rotateY(180deg)]"
                } ${
                  effect1 && "[transform:rotateY(180deg)]"
                } " transition-all [backface-visibility:hidden] absolute inset-0 h-full w-full rounded-xl px-12`} 
                onClick={() =>{
                  setEffect(false);
                  setEffect1(true);}} 
                onAnimationEnd={() => {
                  setEffect1(false);
                }}
              >
                <div className="text-slate-100 text-center text-10vw font-extrabold">
                  <p className="mt-20">{flashcard.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    );
  };

  return (
    <div id="main" className="container mx-auto">
      <Flashcard />
    </div>
  );
};

export default MathFlashCards;
