import "../globals.css";
import SearchIcon from "./searchicon";
import Subject from "./subjects";

const hero = () => {
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
          />
          <SearchIcon />
        </div>
      </div>
      <Subject />
    </section>
  );
};

export default hero;
