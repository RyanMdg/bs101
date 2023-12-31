import "../globals.css";
import SearchIcon from "./searchicon";
import Subject from "./subjects";
import { useState } from "react";

const hero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  //  Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section>
      <div className="bg-[#60A5FA]">
        <h1 className=" text-white text-[.9rem] font-semibold px-1 py-2">
          Reviewer exclusively for bscs101
        </h1>
      </div>
      <div className="flex justify-center mt-8">
        <div className="relative flex w-[80%] items-center border rounded-lg py-1 border-[#60A5FA]">
          <input
            className="pl-10 w-full pr-4 py-1 border-none rounded-lg placeholder-[#60A5FA] placeholder-opacity-50 text-[#60A5FA] text-sm outline-none"
            type="search"
            placeholder="Search you want to review"
            name=""
            id=""
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <SearchIcon />
        </div>
      </div>

      <a
        className=" flex justify-center items-center h-14 border-2 rounded-md shadow-2xl text-[#60A5FA] uppercase font-semibold mx-4 mt-5 border-[#60A5FA]"
        href="/flashcards"
      >
        add flashcard
      </a>

      <Subject searchTerm={searchTerm} />
    </section>
  );
};

export default hero;
