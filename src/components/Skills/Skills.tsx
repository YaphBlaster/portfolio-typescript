import React from "react";
import { Element } from "react-scroll";
import Skill from "../Skill/Skill";
import styled from "styled-components/macro";
import Title from "../Title";
import { ISkill } from "../../interfaces/interfaces";
import FadeIn from "../FadeIn/FadeIn";

const ElementStyled = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  max-width: 850px;
  grid-gap: 10px;
  width: 100%;
`;

interface Props {
  skills: ISkill[];
}

const Skills = ({ skills }: Props) => {
  return (
    <FadeIn>
      <ElementStyled name="skills">
        <Title>Skills</Title>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill {...skill} key={index} />
          ))}
        </SkillsContainer>
      </ElementStyled>
    </FadeIn>
  );
};

export default Skills;
