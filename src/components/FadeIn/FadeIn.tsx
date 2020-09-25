import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components/macro";

const Motion = styled(motion.div)``;

const item = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

interface Props {
  children: React.ReactNode;
}

const FadeIn = ({ children }: Props) => {
  return <Motion variants={item}>{children}</Motion>;
};

export default FadeIn;
