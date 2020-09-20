import React from "react";
import { Element } from "react-scroll";
import Skill from "../Skill/Skill";
import styled from "styled-components/macro";
import Title from "../Title";
import { ISkill } from "../../interfaces/interfaces";

const SkillsContainer = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  max-width: 850px;
  grid-gap: 10px;
`;

interface Props {
  skills: ISkill[];
}

const Skills = ({ skills }: Props) => {
  return (
    <Element name="skills">
      <Title>Skills</Title>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Skill {...skill} key={index} />
        ))}
      </SkillsContainer>
    </Element>
  );
};

export default Skills;
