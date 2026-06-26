import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./components/sections/Portfolio";
import Skills from "./components/sections/Skills";
import Accomplishments from "./components/sections/Accomplishments";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Accomplishments />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  background: var(--bg);
`;

export default App;
