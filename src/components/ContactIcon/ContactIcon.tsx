import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";

const LinkIcon = styled.img`
  width: 50px;
  height: 50px;
`;

interface Props {
  href: string;
  icon: string;
  isEmail?: boolean;
}

const ContactIcon = ({ href, icon, isEmail = false }: Props) => {
  return (
    <motion.div
      whileHover={{
        rotate: [0, 10, 0, -10, 0, 10, 0, -10, 0],
        transition: { duration: 0.4 },
      }}
    >
      <a
        href={href}
        target={isEmail ? "_self" : "_blank"}
        rel="noopener noreferrer"
      >
        <LinkIcon src={icon} />
      </a>
    </motion.div>
  );
};

export default ContactIcon;
