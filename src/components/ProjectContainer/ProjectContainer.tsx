import React from "react";
import { Element } from "react-scroll";
import styled from "@emotion/styled";
import { IProject } from "../../interfaces/interfaces";
import FadeIn from "../FadeIn/FadeIn";

import Project from "../Project/Project";
import Title from "../Title";

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
`;

interface Props {
  projects: IProject[];
}

const ProjectContainer = ({ projects }: Props) => {
  return (
    <FadeIn>
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
    </FadeIn>
  );
};

export default ProjectContainer;
