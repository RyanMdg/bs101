import Navbar from "../src/app/components/navbar";
import IntroCom from "@/app/components/introCom-review";

const computing = () => {
  return (
    <div>
      <Navbar />
      <h1 className=" ps-2 pt-2 font-[600]">Introduction to Computing</h1>
      <div className="grid grid-cols-2 mx-auto text-center mt-4 py-2 bg-[#3B82F6]">
        <a
          href="/flashcards"
          className=" text-white border-black border-r-2 font-semibold"
        >
          Add FlashCards
        </a>

        <a href="/flashcards" className=" text-white font-semibold">
          FlashCards
        </a>
      </div>

      <IntroCom />
    </div>
  );
};

export default computing;
