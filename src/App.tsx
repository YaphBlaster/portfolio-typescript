import React from "react";
import styled from "styled-components";
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
  /* color: #785ae6 !important; */
`;

const AppBoundary = styled(motion.div)`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Motion = styled(motion.div)``;

function App() {
  return (
    <Wrapper>
      <AppBoundary variants={container} initial="hidden" animate="show">
        <Motion variants={item}>
          <Navbar />
        </Motion>
        <Motion variants={item}>
          <Carousel />
        </Motion>
        <Motion variants={item}>
          <Description />
        </Motion>
        <Motion variants={item}>
          <Skills skills={SkillList} />
        </Motion>
        <Motion variants={item}>
          <ProjectContainer projects={Projects} />
        </Motion>
        <Motion variants={item}>
          <Contact />
        </Motion>
      </AppBoundary>
    </Wrapper>
  );
}

export default App;
