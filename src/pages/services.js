import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Image from "../images/img-3.jpg";
import {motion} from "framer-motion";
import { animationThree } from "../animation";

const services = () => {
  return (
    <motion.div
    initial="out" animate="end" 
    exit="out" variants={animationThree}>
      <Header />
      <Hero image={Image} title='Happy Birds' desc='The best birds seeds' />
    </motion.div>
  );
};

export default services;
