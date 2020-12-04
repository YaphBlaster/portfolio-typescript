import React from "react";
import styled from "@emotion/styled";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Description from "./components/Description/Description";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import { fontAndAccentColour, projects, skillList } from "./data/UserInfo";
import { motion } from "framer-motion";
import { addBackToTop } from "vanilla-back-to-top";

const Wrapper = styled.div`
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
  padding: 15px;
  display: flex;
  justify-content: center;
  font-family: "Roboto Mono", monospace;
  box-sizing: border-box;
  color: ${fontAndAccentColour};
`;

const AppBoundary = styled(motion.div)`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

function App() {
  return (
    <Wrapper>
      {addBackToTop({
        diameter: 56,
        backgroundColor: fontAndAccentColour,
        textColor: "#fff",
        innerHTML: "<div id='back-to-top-inner'>🚀</div>",
      })}
      <AppBoundary variants={container} initial="hidden" animate="show">
        <Navbar />
        <Carousel />
        <Description />
        <Skills skills={skillList} />
        <ProjectContainer projects={projects} />
        <Contact />
      </AppBoundary>
    </Wrapper>
  );
}

export default App;
