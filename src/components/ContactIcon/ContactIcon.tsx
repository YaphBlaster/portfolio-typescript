import React from "react";
import styled from "@emotion/styled/macro";
import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import { fontAndAccentColour } from "../../data/UserInfo";
import { smallBreakPoint } from "../../constants";

const LinkIcon = styled.div`
  fill: ${fontAndAccentColour};
  svg {
    transition: 0.2s linear all;
    height: 60px;
    width: 60px;
  }

  @media screen and (max-width: ${smallBreakPoint}) {
    svg {
      height: 45px;
      width: 45px;
    }
  }
`;

interface Props {
  href: string;
  icon: string;
  isEmail?: boolean;
}

const ContactIcon = ({ href, icon, isEmail = false }: Props) => {
  return (
    <a
      href={href}
      target={isEmail ? "_self" : "_blank"}
      rel="noopener noreferrer"
    >
      <motion.div
        whileHover={{
          rotate: [0, 10, 0, -10, 0, 10, 0, -10, 0],
          transition: { duration: 0.4 },
        }}
      >
        <LinkIcon>
          <ReactSVG src={icon} />
        </LinkIcon>
      </motion.div>
    </a>
  );
};

export default ContactIcon;
