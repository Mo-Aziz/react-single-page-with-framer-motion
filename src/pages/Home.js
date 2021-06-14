import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Image from "../images/img-1.jpg";
import {motion} from "framer-motion";
import { animationOne, transition } from "../animation";


const Home = () => {
  return (
    <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={animationOne}
    transition={transition}>
      <Header />
      <Hero image={Image} title='Happy Birds' desc='The best birds seeds'/>
    </motion.div>
  );
};

export default Home;
