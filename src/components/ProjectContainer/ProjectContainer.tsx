import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components/macro";
import { IProject } from "../../interfaces/interfaces";

import Project from "../Project/Project";
import Title from "../Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  > div {
    margin: 10px;
  }
`;

interface Props {
  projects: IProject[];
}

const ProjectContainer = ({ projects }: Props) => {
  return (
    <Element name="projects">
      <Title>Projects</Title>
      <Container>
        {projects
          .sort(
            (firstProject, secondProject) =>
              secondProject.year - firstProject.year
          )
          .map((project, index) => (
            <Project {...project} key={index} />
          ))}
      </Container>
    </Element>
  );
};

export default ProjectContainer;
