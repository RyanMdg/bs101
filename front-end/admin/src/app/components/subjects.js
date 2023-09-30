const Subject = ({ searchTerm }) => {
  const subjects = [
    { id: "math2", name: "Math In Modern world" },
    { id: "nstp", name: "Nstp" },
    { id: "comprog", name: "Computer Programming" },
    { id: "computing", name: "Introduction to Computing" },
  ];

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-3 md:grid grid-cols-2 gap-4 mx-4">
      {filteredSubjects.map((subject) => (
        <a
          key={subject.id}
          href={subject.id}
          className="flex flex-col items-center"
        >
          <img
            src={`/${subject.id}.png`}
            className="rounded-md mt-7"
            alt={subject.name}
          />
          <span className="mt-2">{subject.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Subject;
