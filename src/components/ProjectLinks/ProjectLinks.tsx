import React from "react";
import styled from "styled-components/macro";
import HyperLinkIcon from "../../assets/externalLink.svg";
import GithubIcon from "../../assets/gitHubIcon.svg";
import { smallBreakPoint } from "../../constants";
import ProjectLink from "../ProjectLink/ProjectLink";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 10px;
  top: 5px;
  > a {
    margin: 5px;
  }

  @media screen and (max-width: ${smallBreakPoint}) {
    flex-direction: column;
  }
`;

interface Props {
  codeLink?: string | string[];
  demoLink?: string;
}

const ProjectLinks = ({ codeLink, demoLink }: Props) => {
  if (codeLink) {
    console.log(codeLink.length);
  }

  const checkType = () => {
    if (Array.isArray(codeLink)) {
      return codeLink.map((link, index) => (
        <ProjectLink link={link} icon={GithubIcon} key={index} />
      ));
    } else {
      return <ProjectLink link={codeLink} icon={GithubIcon} />;
    }
  };

  return (
    <Container>
      {demoLink && <ProjectLink link={demoLink} icon={HyperLinkIcon} />}
      {codeLink && checkType()}
    </Container>
  );
};

export default ProjectLinks;
