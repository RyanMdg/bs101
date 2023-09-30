const comprogReviewer = () => {
  return (
    <div className=" mx-2 mt-5">
      <h1 className=" font-semibold">
        <b className=" underline">Computer program </b> – It is a sequence of
        statements intended to accomplish a certain task. It is a set of
        instructions for a computer to follow.
      </h1>

      <h1 className=" font-semibold mt-5">
        <b className=" underline">Programming</b> – It is a process of planning
        and creating a program.
      </h1>

      <h1 className=" font-semibold mt-5">
        <b className=" underline">High-level Languages</b> – These are the
        programming languages that use natural languages, such as the English
        language.high-level language has its own syntax.
      </h1>
      <ul className=" flex flex-col gap-3 list-inside list-disc ps-2 mt-3 font-semibold">
        {" "}
        <li>
          <b className=" underline bg-yellow-400 px-3">Syntax </b> – rules of
          the language, for example, print or write is used to produce an output
        </li>
        <li>
          <b className=" underline bg-yellow-400 px-3">Commands</b> – these are
          program statements that carry out tasks that the program has to
          perform
        </li>
        <li>
          <b className=" underline bg-yellow-400 px-3">Compiler</b> –translates
          a program written in a high-level language into a low-level language
        </li>
        <li>
          {" "}
          <b className=" underline bg-yellow-400 px-3">Interpreter</b> –this
          acts as a compiler, but it translates one (1) program statement at a
          time, this executes the statement as soon as it is translated.
        </li>
        <li>
          <b className=" underline bg-yellow-400 px-3">Syntax errors</b> – these
          are errors that might be encountered during the process of
          translation. An example is a misspelled command.
        </li>
        <li>
          <b className=" underline bg-yellow-400 px-3">Logical errors </b> –
          errors that occur when the syntax of the program is correct, but the
          expected output is not
        </li>
        <li>
          <b className=" underline bg-yellow-400 px-3">Debugging </b> – the
          process of locating and correcting the errors of a program.
        </li>
      </ul>
    </div>
  );
};

export default comprogReviewer;
