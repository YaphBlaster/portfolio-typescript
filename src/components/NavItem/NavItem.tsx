import React from "react";
import { scroller } from "react-scroll";
import styled from "styled-components/macro";
import { motion } from "framer-motion";

const NavLink = styled(motion.button)`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  font-size: 20px;
  -webkit-tap-highlight-color: transparent;

  :focus {
    outline: none;
  }
`;

interface Props {
  name: string;
  link?: string;
}

const NavItem = ({ name, link }: Props) => {
  return (
    <NavLink
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        if (link)
          scroller.scrollTo(link, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -50,
          });
      }}
    >
      {name}
    </NavLink>
  );
};

export default NavItem;
