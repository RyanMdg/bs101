import "../globals.css";

const navbar = () => {
  return (
    <main>
      <nav className=" flex justify-between bg-[#3B82F6] text-white px-2  text-[.9rem] py-6 uppercase">
        <a href="/" className=" font-bold shadow-2xl">
          Flashcard
        </a>
        <h1 className=" font-semibold">BS101</h1>
      </nav>
    </main>
  );
};

export default navbar;
