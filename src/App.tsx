import React from "react";
import styled from "styled-components/macro";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Description from "./components/Description/Description";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import { Projects, SkillList } from "./data/UserInfo";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  background-image: linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%);
  padding: 15px;
  display: flex;
  justify-content: center;
  font-family: "Roboto Mono", monospace;
  box-sizing: border-box;
  /* color: #785ae6 !important; */
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
      <AppBoundary variants={container} initial="hidden" animate="show">
        <Navbar />
        <Carousel />
        <Description />
        <Skills skills={SkillList} />
        <ProjectContainer projects={Projects} />
        <Contact />
      </AppBoundary>
    </Wrapper>
  );
}

export default App;
