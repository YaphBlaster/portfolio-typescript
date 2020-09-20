import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";

const Logo = styled(motion.img)`
  height: 75px;
  width: 75px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  text-align: center;
  margin: 20px;
`;

interface Props {
  name: string;
  image: string;
}

const Skill = ({ name, image }: Props) => {
  return (
    <Container>
      <Logo
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1, ease: "easeInOut" },
        }}
        src={image}
        alt={name}
      />
      <Text>{name}</Text>
    </Container>
  );
};

export default Skill;
