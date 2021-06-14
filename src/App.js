import React from "react";
import "./App.css";
import {  Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import services from "./pages/services";
import { AnimatePresence} from "framer-motion";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";

const Section =styled.section`
overflow-x: visible;
`;


function App() {
  let location= useLocation();
  return (
    <Section>
    <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={services} />
      </Switch>
      </AnimatePresence>
    </Section>
  );
}
 

export default App;
