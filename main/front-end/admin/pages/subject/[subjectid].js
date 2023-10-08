import Navbar from "../../src/app/components/navbar";
import Comprog from "../../src/app/components/comprog-review";
import IntroCom from "../../src/app/components/introCom-review";
import Nstp from "../../src/app/components/nstp-review";
import { useRouter } from "next/router";
const comprog = () => {
  const router = useRouter();
  const subjectid = router.query.subjectid;

  console.log(subjectid);
  return (
    <div>
      <Navbar />
      <h1 className=" ps-2 pt-2 font-[600]">{subjectid}</h1>
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
      {subjectid === "Computer Programming" ? (
        <Comprog />
      ) : subjectid === "Introduction to Computing" ? (
        <IntroCom />
      ) : subjectid === "Nstp" ? (
        <Nstp />
      ) : (
        "No Subject Information"
      )}
    </div>
  );
};

export default comprog;
