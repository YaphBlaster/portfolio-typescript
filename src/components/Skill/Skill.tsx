import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { ISkill } from "../../interfaces/interfaces";
import { ReactSVG } from "react-svg";
import { smallBreakPoint } from "../../constants";

const Logo = styled(ReactSVG)`
  svg {
    height: 72px;
    width: 72px;

    @media screen and (max-width: ${smallBreakPoint}) {
      height: 65px;
      width: 65px;
    }
  }
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
  margin-top: 10px;
  font-size: 1em;
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
