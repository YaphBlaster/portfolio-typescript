import React from "react";
import { Element } from "react-scroll";
import Skill from "../Skill/Skill";
import styled from "@emotion/styled/macro";
import Title from "../Title";
import { ISkill } from "../../interfaces/interfaces";
import FadeIn from "../FadeIn/FadeIn";
import { smallBreakPoint } from "../../constants";

const ElementStyled = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  max-width: 850px;
  grid-gap: 30px;
  width: 100%;

  @media screen and (max-width: ${smallBreakPoint}) {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  }
`;

interface Props {
  skills: ISkill[];
}

const Skills = ({ skills }: Props) => {
  return (
    <FadeIn>
      <Title>Skills</Title>
      <ElementStyled name="skills">
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
