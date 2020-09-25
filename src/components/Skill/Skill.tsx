import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { ISkill } from "../../interfaces/interfaces";
import { ReactSVG } from "react-svg";

const Logo = styled(ReactSVG)`
  height: 75px;
  width: 75px;
  fill: #2b2b2b;
`;

const LogoContainer = styled(motion.div)``;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  text-align: center;
  margin: 20px;
`;

const Skill = ({ name, image }: ISkill) => {
  return (
    <Container>
      <LogoContainer
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1, ease: "easeInOut" },
        }}
      >
        <Logo src={image} />
      </LogoContainer>
      <Text>{name}</Text>
    </Container>
  );
};

export default Skill;
