import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { 
    x: "100vw",
    opacity: 0 
  },
  visible: { 
    x: 0,
    opacity: 1,
    transition: { 
      type: "spring", 
      delay: 0.5,
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    }
  },
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}  
              whileHover={{ 
                scale: 1.3, 
                color: "#f8e112",
                originX: 0,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
