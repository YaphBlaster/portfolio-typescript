import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import { fontAndAccentColour } from "../../data/UserInfo";

const Icon = styled(ReactSVG)`
  width: 40px;
  height: 40px;
  fill: ${fontAndAccentColour};
`;

const AnchorMotion = styled(motion.a)``;

interface Props {
  link?: string;
  icon: string;
}

const ProjectLink = ({ link, icon }: Props) => {
  return (
    <AnchorMotion
      href={link}
      target="_blank"
      whileHover={{
        rotate: [0, 10, 0, -10, 0, 10, 0, -10, 0],
        transition: { duration: 0.4 },
      }}
    >
      <Icon
        src={icon}
        beforeInjection={(svg: any) => {
          svg.setAttribute("style", "width: 40px; height: 40px;");
        }}
      />
    </AnchorMotion>
  );
};

export default ProjectLink;
