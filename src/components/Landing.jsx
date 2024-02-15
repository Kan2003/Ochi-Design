import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div data-scroll data-scroll-speed="-0.3" className="w-full h-screen bg-zinc-50 pt-1 flex gap-20 flex-col">
      <div className="text-struct mt-52 px-20">
        {["we create", "Eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.45, 0, 0.55, 1] , duration : 1 }}
                    className="w-[8vw] h-[5.2vw] bg-red-400 relative rounded-md mr-2 bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')]"
                  ></motion.div>
                )}
                <h1 className="flex uppercase h-full text-[7vw] leading-[5.8vw] tracking-tighter font-['Founders Grotesk X-Condensed'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-400 flex justify-between items-center py-3 px-10">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-regular tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-1">
          <div className="px-4 py-1 uppercase border-2 rounded-full border-zinc-600">
            Start the project
          </div>
          <div className="w-9 h-9 rounded-full border-2 border-zinc-600 flex items-center justify-center ">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
