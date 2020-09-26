import React from "react";
import styled from "styled-components/macro";
import { smallBreakPoint } from "../../constants";
import { summary } from "../../data/UserInfo";
import FadeIn from "../FadeIn/FadeIn";

const Text = styled.div`
  font-size: 1.2em;
  line-height: 30px;
  transition: 0.2s linear all;

  @media screen and (max-width: ${smallBreakPoint}) {
    font-size: 1.1rem;
  }
`;

const Description = () => {
  return (
    <FadeIn>
      <Text>{summary}</Text>
    </FadeIn>
  );
};

export default Description;
