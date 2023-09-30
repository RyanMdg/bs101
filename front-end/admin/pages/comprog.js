import Navbar from "../src/app/components/navbar";

const comprog = () => {
  return (
    <div>
      <Navbar />
      <h1 className=" ps-2 pt-2 font-[600]">Computer Programming</h1>
      <div className="grid grid-cols-2 mx-auto text-center mt-4 py-2 bg-[#3B82F6]">
        <a
          href=""
          className=" text-white border-black border-r-2 font-semibold"
        >
          Reviewer
        </a>

        <a href="" className=" text-white font-semibold">
          FlashCards
        </a>
      </div>
    </div>
  );
};

export default comprog;
