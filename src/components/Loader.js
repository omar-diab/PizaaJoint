import React from "react";

import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-30, 30],
    y: 0,
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationThree: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  // const [animation, cycleAnimation] = useCycle(
  //   "animationOne",
  //   "animationTwo",
  //   "animationThree"
  // );

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate="animationOne"
      />
    </>
  );
};

export default Loader;
