import React from "react";
import styled from "@emotion/styled/macro";
import TechBox from "../TechBox/TechBox";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import { mediumBreakPoint, smallBreakPoint } from "../../constants";
import { IProject } from "../../interfaces/interfaces";

const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;

  @media screen and (max-width: ${mediumBreakPoint}) {
    flex-direction: column;
  }
`;

const InnerText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  text-align: left;
  @media screen and (max-width: ${mediumBreakPoint}) {
    margin-left: auto;
  }
`;

const Tile = styled.div`
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  box-shadow: 8px 4px 15px 5px #1111110d;
  box-shadow: 8px 4px 15px 5px #0000000d;
  text-align: center;
  padding: 25px;
  position: relative;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 1.25em;
  margin: 15px 0;

  @media screen and (max-width: ${mediumBreakPoint}) {
    text-align: center;
  }
`;

const Description = styled.div`
  flex-grow: 1;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 175px;
  height: 175px;
  margin: 5px;
  box-sizing: border-box;
  margin-bottom: 5px;
  box-shadow: 0 0 1px 0 gray inset, 0 0 1px 0 gray;
  border-radius: 50%;
  border: 0.4em double rgb(43 43 43 / 0.7);
  transition: 0.2s linear all;
  image-rendering: optimizeSpeed; /* STOP SMOOTHING, GIVE ME SPEED  */
  image-rendering: -moz-crisp-edges; /* Firefox                        */
  image-rendering: -o-crisp-edges; /* Opera                          */
  image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
  image-rendering: optimize-contrast; /* CSS3 Proposed                  */
  -ms-interpolation-mode: nearest-neighbor; /* IE8+                           */

  @media screen and (max-width: ${smallBreakPoint}) {
    width: 150px;
    height: 150px;
  }
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: ${smallBreakPoint}) {
    flex-direction: column;
    text-align: center;
    max-width: 240px;
    justify-content: center;
    align-self: center;
  }
  @media screen and (max-width: ${mediumBreakPoint}) {
    justify-content: center;
    align-self: center;
  }
`;

const Project = ({
  title,
  image,
  imageDescription,
  description,
  techStack,
  codeLink,
  demoLink,
}: IProject) => {
  return (
    <Tile>
      <ProjectLinks codeLink={codeLink} demoLink={demoLink}></ProjectLinks>

      <Layout>
        <Image src={image} alt={imageDescription} />

        <InnerText>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <TechStackContainer>
            {techStack.map((tech, index) => (
              <TechBox text={tech} key={index} />
            ))}
          </TechStackContainer>
        </InnerText>
      </Layout>
    </Tile>
  );
};

export default Project;
