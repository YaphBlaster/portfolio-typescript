import React, { ReactNode } from "react";
import styled from "@emotion/styled/macro";

const Container = styled.div`
  font-size: 1.75em;
  margin: 35px;
  font-weight: 400;
  text-align: center;
  position: relative;
`;

interface Props {
  children: ReactNode;
}

const Title = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Title;
