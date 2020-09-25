import React from "react";
import styled from "styled-components/macro";
import { summary } from "../../data/UserInfo";
import FadeIn from "../FadeIn/FadeIn";

const Desc = styled.div`
  font-size: 1.2em;
  line-height: 30px;
  font-weight: 400;
  padding: 15px;
`;

const Description = () => {
  return (
    <FadeIn>
      <Desc>{summary}</Desc>
    </FadeIn>
  );
};

export default Description;
