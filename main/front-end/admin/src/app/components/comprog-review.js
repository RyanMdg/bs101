import React, { useEffect, useState } from "react";
import axios from "axios";

const ComprogReviewer = () => {
  // State variables to store the fetched data
  const [flashcardData, setFlashcardData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Make a GET request to your API endpoint
    axios
      .get("https://flashcardsbs101.onrender.com/flashcard/getFlashCard")
      .then((response) => {
        console.log("Response Data:", response.data); // Log the response data
        setFlashcardData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="mx-2 mt-5">
      <h1 className="uppercase bg-yellow-500 text-center mt-10 py-2 mb-3 font-extrabold underline">
        Reviewers
      </h1>
      <h1 className="uppercase">Prelims handouts</h1>
      <u className="list-inside list-disc">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <a
              href={flashcardData.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="font-semibold">{flashcardData.title}</li>
            </a>
            <h1>Answer: {flashcardData.answer}</h1>
            <p>Question: {flashcardData.question}</p>
          </>
        )}
      </u>
    </div>
  );
};

export default ComprogReviewer;
