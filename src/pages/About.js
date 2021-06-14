import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Image from "../images/img-2.jpg";

const About = () => {
  return (
    <div>
      <Header />
      <Hero image={Image} title='The freshy Lizard' desc='Always with healthy skin' />
    </div>
  );
};

export default About;
