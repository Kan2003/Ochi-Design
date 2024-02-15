import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0%" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20 ">
      <div className="px-10 border-b-2 border-zinc-500 pb-10">
        <h1 className="text-[3vw] tracking-tight font-['Founders Grotesk X-Condensed'] font-semibold text-zinc-800">
          Featured Projects
        </h1>
      </div>
      <div className="cards w-full px-10 flex gap-5 mt-10">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="cardContainer relative w-1/2 h-[75vh] "
        >
          <h1 className="z-10 absolute flex left-full overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none text-7xl tracking-tighter font-semibold">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.61, 1, 0.88, 1], delay: index * 0.05 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="w-full h-full rounded-xl  bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png')]"></div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="cardContainer relative w-1/2 h-[75vh] "
        >
          <h1 className="z-10 flex overflow-hidden absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none text-7xl tracking-tighter font-semibold">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.61, 1, 0.88, 1], delay: index * 0.05 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="w-full h-full rounded-xl  bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg')]"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default Featured;
