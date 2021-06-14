import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Image from "../images/img-1.jpg";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero image={Image} title='Happy Birds' desc='The best birds seeds'/>
    </div>
  );
};

export default Home;
