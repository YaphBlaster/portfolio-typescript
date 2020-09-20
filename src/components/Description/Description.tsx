import React from "react";
import styled from "styled-components/macro";
import { Summary } from "../../data/UserInfo";
const Description = () => {
  const Desc = styled.div`
    font-size: 1.2em;
    line-height: 30px;
    font-weight: 400;
    padding: 15px;
  `;
  return (
    <Desc>
      {Summary}
      <span role="img" aria-label="black heart">
        🖤
      </span>
    </Desc>
  );
};

export default Description;
