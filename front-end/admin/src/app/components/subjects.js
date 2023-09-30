const subject = () => {
  return (
    <div className=" mt-8 md:grid grid-cols-2 gap-4 mx-4">
      <a href="math" className="flex flex-col items-center ">
        <img src="/math2.png" className=" rounded-md" alt="" />
        <span className=" mt-2">Math In Modern world</span>
      </a>
      <a href="nstp" className=" flex flex-col items-center">
        <img src="/nstp.png" className=" h-[70%] mt-7 rounded-md" alt="" />
        <span className=" mt-2">Nstp</span>
      </a>
    </div>
  );
};

export default subject;
