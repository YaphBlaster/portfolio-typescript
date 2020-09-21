import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  margin: 5px;
  border: black solid 1px;
  padding: 7px;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-size: 0.85em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

interface Props {
  text: string;
}

const TechBox = ({ text }: Props) => {
  return (
    <Container>
      <div>{text}</div>
    </Container>
  );
};

export default TechBox;
