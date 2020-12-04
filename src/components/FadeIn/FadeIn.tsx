import { motion } from "framer-motion";
import React from "react";
import styled from "@emotion/styled";

const Motion = styled(motion.div)`
  width: 100%;
`;

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
