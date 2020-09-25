import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import { fontAndAccentColour } from "../../data/UserInfo";

const LinkIcon = styled(ReactSVG)`
  fill: ${fontAndAccentColour};
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
        <LinkIcon
          src={icon}
          beforeInjection={(svg: any) => {
            svg.setAttribute("style", "width: 60px; height: 60px;");
          }}
        />
      </motion.div>
    </a>
  );
};

export default ContactIcon;
