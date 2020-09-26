import React from "react";
import * as resumeLink from "../../resume.pdf";
import styled from "styled-components/macro";
import NavItem from "../NavItem/NavItem";
import { smallBreakPoint } from "../../constants";
import FadeIn from "../FadeIn/FadeIn";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: none;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;

  > a,
  > button {
    margin: 18px;
  }

  @media screen and (max-width: ${smallBreakPoint}) {
    flex-direction: column;
    max-width: 100%;
    align-items: flex-end;
  }
`;
const Navbar = () => {
  return (
    <FadeIn>
      <NavWrapper>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <NavItem name="Resume"></NavItem>
        </a>
        <NavItem name="Projects" link="projects"></NavItem>
        <NavItem name="Contact" link="contact"></NavItem>
      </NavWrapper>
    </FadeIn>
  );
};

export default Navbar;
