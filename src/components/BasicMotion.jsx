import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "motion/react";

const BasicMotion = () => {
  const [isVisible, setIsVisible] =
    useState(true);
  return (
    <div className="grid place-content-center h-screen">
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            className="w-[150px] h-[150px] bg-yellow-400 rounded-2xl"
            animate={{ rotate: 180 }}
            transition={{ duration: 2 }}
          ></motion.div>
        ) : null}
      </AnimatePresence>
      <motion.button layout className="absolute left-0 right-0 "
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "show"}
      </motion.button>
    </div>
  );
};

export default BasicMotion;
