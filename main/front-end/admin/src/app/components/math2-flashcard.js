const MathFlashCards = () => {
  const Flashcard = () => {
    const flashcardContent = [];
    console.log(flashcardContent);
    const pattern = {
      answerParagraph: "Pattern",
      questionParagraph:
        "A sequences or designs that are orderly and that repeat.",
    };
    flashcardContent.push(pattern);
    const symmetry = {
      answerParagraph: "Symmetry",
      questionParagraph:
        "When different sides of something are alike. These reflections may be mirror images with only two sides like the two sides of our bodies.",
    };
    flashcardContent.push(symmetry);
    const fractal = {
      answerParagraph: "Fractal",
      questionParagraph:
        "the 'never-ending' patterns that repeat indefinitely as the pattern is iterated on an infinitely smaller scale.",
    };
    flashcardContent.push(fractal);
    const spiral = {
      answerParagraph: "Spiral",
      questionParagraph:
        "another common pattern in nature that we see more often in living things. We see this pattern in hurricanes, galaxies, and some seashells.",
    };
    flashcardContent.push(spiral);
    const tessellations = {
      answerParagraph: "Tessellations",
      questionParagraph:
        "patterns that are formed by repeated cubes or tiles. These, too, can occur with both living and non-living things.",
    };
    flashcardContent.push(tessellations);
    const fibonacciS = {
      answerParagraph: "Fibonacci Sequence",
      questionParagraph:
        "the sequence of numbers that each number is the sum of the two numbers before it.",
    };
    flashcardContent.push(fibonacciS);
    const fibonacciP = {
      answerParagraph: "Fibonacci Pattern",
      questionParagraph:
        "We see that some plants exhibit this pattern, like the branches of a tree. You start with the main branch at the bottom. It splits off so that you have two, and it splits off again so that you have 3, and so forth.",
    };
    flashcardContent.push(fibonacciP);
    const language = {
      answerParagraph: "Language",
      questionParagraph:
        "a complex system of words and symbols, either spoken or written, used by a particular community as a means of communication.",
    };
    flashcardContent.push(language);
    const pcp = {
      answerParagraph: "Precise, Concise, Powerful",
      questionParagraph: "Characteristics of the language of mathematics",
    };
    flashcardContent.push(pcp);
    const precise = {
      answerParagraph: "Precise",
      questionParagraph: "able to make very fine distinctions.",
    };
    flashcardContent.push(precise);
    const concise = {
      answerParagraph: "Concise",
      questionParagraph: "able to say things briefly",
    };
    flashcardContent.push(concise);
    const powerful = {
      answerParagraph: "Powerful",
      questionParagraph: "able to express complex thoughts with relative ease.",
    };
    flashcardContent.push(powerful);
    const ns = {
      answerParagraph: "Numbers, Symbols",
      questionParagraph: "Math is comprised of primarily two things:",
    };
    flashcardContent.push(ns);
    const nouns = {
      answerParagraph: "nouns",
      questionParagraph:
        "In English, _____ are used to name things we want to talk about like people, places, and things",
    };
    flashcardContent.push(nouns);
    const sentence = {
      answerParagraph: "Sentence",
      questionParagraph: "_____ are used to state complete thoughts",
    };
    flashcardContent.push(sentence);
    const expression = {
      answerParagraph: "Expression",
      questionParagraph:
        "The mathematical analog of a ‘noun’, does not state a complete thought",
    };
    flashcardContent.push(expression);
    const set = {
      answerParagraph: "Set",
      questionParagraph: "is a collection of objects",
    };
    flashcardContent.push(set);
    const elements = {
      answerParagraph: "∈ Elements",
      questionParagraph: "The members of a set",
    };
    flashcardContent.push(elements);
    const functionS = {
      answerParagraph: "Functions",
      questionParagraph:
        "in virtually any mathematical sentence where the phrase appears, it is followed by the name of a number",
    };
    flashcardContent.push(functionS);
    const relations = {
      answerParagraph: "Relations",
      questionParagraph:
        "Equals” and “is an element of” are two other examples of",
    };
    flashcardContent.push(relations);
    const logicalconn = {
      answerParagraph: "logical connective",
      questionParagraph:
        "is a symbol or a word which is used to connect two or more sentences.",
    };
    flashcardContent.push(logicalconn);
    const negation = {
      answerParagraph: "~ Negation",
      questionParagraph:
        "is the opposite of a statement, usually employing the word not.",
    };
    flashcardContent.push(negation);
    const conjunction = {
      answerParagraph: "⋀ Conjunction",
      questionParagraph:
        "is a compound sentence formed by using the word and to join two simple sentences.",
    };
    flashcardContent.push(conjunction);
    const disjunction = {
      answerParagraph: "V Disjunction",
      questionParagraph:
        "is a compound sentence formed by using the word or to join two simple sentences.",
    };
    flashcardContent.push(disjunction);
    const implication = {
      answerParagraph: "⇒ Implication",
      questionParagraph:
        "is a type of relationship between two statements or sentences. The statement “𝑝𝑝 implies qq”means that if pp is true, the qq must also be true",
    };
    flashcardContent.push(implication);

    return (
      <div className="flex min-h-fit mt-10 flex-col justify-center select-none">
        {flashcardContent.map((flashcard) => (
          <div className="mb-10 group h-60 w-100 [perspective:500px]">
            <div className="bg-slate-100 relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d group-active:[transform:rotateY(180deg)] ">
              <div className="text-center absolute inset-0 text-2xl font-medium">
                <p className="mt-10 px-5">{flashcard.questionParagraph}</p>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl px-12 [transform:rotateY(180deg)] transition-all [backface-visibility:hidden] group-active:bg-blue-400 group-active:[backface-visibility:visible]">
                <div className="text-slate-100 text-center text-6xl font-extrabold">
                  <p className="mt-20">{flashcard.answerParagraph}</p>
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
