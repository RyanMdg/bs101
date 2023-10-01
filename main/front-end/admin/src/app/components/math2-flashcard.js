const mathFlashCards = () => {
  return (
    <div className="container mx-auto mt-5">
      <p class="text-2xl font-extrabold">Pattern</p>
      <p class="mb-10 text-xl font-medium">
        A sequences or designs that are orderly and that repeat
      </p>

      <p className="text-2xl font-extrabold">Symmetry</p>
      <p className="mb-10 text-xl font-medium">
        When different sides of something are alike. These reflections may be
        mirror images with only two sides like the two sides of our bodies
      </p>

      <p className="text-2xl font-extrabold">Fractal</p>
      <p className="mb-10 text-xl font-medium">
        {" "}
        the 'never-ending' patterns that repeat indefinitely as the pattern is
        iterated on an infinitely smaller scale.
      </p>

      <p className="text-2xl font-extrabold">Spiral</p>
      <p className="mb-10 text-xl font-medium">
        {" "}
        another common pattern in nature that we see more often in living
        things. We see this pattern in hurricanes, galaxies, and some seashells.
      </p>

      <p className="text-2xl font-extrabold">Fibonacci Sequence</p>
      <p className="mb-10 text-xl font-medium">
        {" "}
        the sequence of numbers that each number is the sum of the two numbers
        before it
      </p>

      <p className="text-2xl font-extrabold">Fibonacci Pattern</p>
      <p className="mb-10 text-xl font-medium">
        {" "}
        We see that some plants exhibit this pattern, like the branches of a
        tree.You start with the main branch at the bottom. It splits off so that
        you have two, and it splits off again so that you have 3, and so forth.
      </p>

      <p className="text-2xl font-extrabold">Language</p>
      <p className="mb-10 text-xl font-medium">
        a complex system of words and symbols, either spoken or written, used by
        a particular community as a means of communication.
      </p>

      <p className="text-2xl font-extrabold">Precise</p>
      <p className="mb-10 text-xl font-medium">
        able to make very fine distinctions
      </p>

      <p className="text-2xl font-extrabold">Concise</p>
      <p className="mb-10 text-xl font-medium">able to say things briefly</p>

      <div className="flex min-h-screen flex-col justify-center select-none">
        <div className="group h-96 w-100 [perspective:1000px]">
          <div className=" relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d group-active:[transform:rotateY(180deg)] ">
            <div className="text-center absolute inset-0 mt-10 text-2xl font-medium">
              <p>able to express complex thoughts with relative ease</p>
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl px-12 [transform:rotateY(180deg)] transition-all [backface-visibility:hidden] group-active:bg-black group-active:[backface-visibility:visible]">
              <div className="text-slate-100 text-center text-6xl font-extrabold">
                <p className=" mt-20">Powerful</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mathFlashCards;
