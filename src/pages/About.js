import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Image from "../images/img-2.jpg";
import {motion} from "framer-motion";
import { animationTwo} from "../animation";

const About = () => {
  return (
    <motion.div
    initial="out" animate="in" 
    exit="out" variants={animationTwo}>
      <Header />
      <Hero image={Image} title='The freshy Lizard' desc='Always with healthy skin' />
    </motion.div>
  );
};

export default About;
