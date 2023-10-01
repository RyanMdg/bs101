const tab = () => {
  const subjects = [
    { id: "math2", name: "Math In Modern world" },
    { id: "nstp", name: "Nstp" },
    { id: "flashcards", name: "Computer Programming" },
    { id: "computing", name: "Introduction to Computing" },
  ];

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase()
  );

  return (
    <div>
      {filteredSubjects.map((subject) => (
        <div className="grid grid-cols-2 mx-auto text-center mt-4 py-2 bg-[#3B82F6]">
          <a
            href={subject.id}
            className=" text-white border-black border-r-2 font-semibold"
          >
            Reviewer
          </a>

          <a href={subject.id} className=" text-white font-semibold">
            FlashCards
          </a>
        </div>
      ))}
    </div>
  );
};

export default tab;
