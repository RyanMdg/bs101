const Subject = ({ searchTerm }) => {
  // Assuming 'subjects' is an array of subject objects with a 'name' property
  const subjects = [
    { id: "math2", name: "Math In Modern world" },
    { id: "nstp", name: "Nstp" },
    // Add more subjects as needed
  ];

  // Filter subjects based on the search term
  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-8 md:grid grid-cols-2 gap-4 mx-4">
      {filteredSubjects.map((subject) => (
        <a
          key={subject.id}
          href={subject.id}
          className="flex flex-col items-center"
        >
          <img
            src={`/${subject.id}.png`}
            className="rounded-md"
            alt={subject.name}
          />
          <span className="mt-2">{subject.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Subject;
