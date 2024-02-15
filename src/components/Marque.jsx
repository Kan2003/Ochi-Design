import { motion } from "framer-motion";
import React from "react";

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className="w-full py-16 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-50 text-white flex whitespace-nowrap  overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[20vw] tracking-tighter leading-none -mt-5  uppercase font-bold pr-10"
        >
          we are ochi{" "}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[20vw] tracking-tighter leading-none  -mt-5 uppercase font-bold pr-10"
        >
          we are ochi{" "}
        </motion.h1>
      </div>
    </div>
  );
}

export default Marque;
