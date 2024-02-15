import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  return (
    <div data-scroll data-scroll-speed="" className="w-full py-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-[#212121]">
      <div className="w-[80%] px-10">
        <h1 className=" text-[3.2vw] tracking-tight font-normal leading-[3.6vw]">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </h1>
      </div>
      <div className="w-full mt-20 px-10 border-t-2 border-zinc-500 flex pt-5">
        <div className="w-1/2 ">
          <h1 className="text-[3.2vw] tracking-tight font-normal">
            Our approach:
          </h1>
          <div className="button pl-6 pr-2 py-2 mt-3 text-white bg-zinc-900 flex items-center gap-3 w-fit rounded-[2vw]">
            <div className="uppercase text-sm font-semibold ">read more</div>
            <div className="w-9 h-9 rounded-full border-2 bg-white text-zinc-700 flex items-center justify-center ">
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[33vw] rounded-xl bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')]"></div>
      </div>
    </div>
  );
}

export default About;
