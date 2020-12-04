import React from "react";
import { Element } from "react-scroll";
import styled from "@emotion/styled/macro";
import gitHubIcon from "../../assets/gitHubIcon.svg";
import linkedinIcon from "../../assets/linkedIn.svg";
import emailIcon from "../../assets/email.svg";
import ContactIcon from "../ContactIcon/ContactIcon";
import Title from "../Title";
import FadeIn from "../FadeIn/FadeIn";
import { smallBreakPoint } from "../../constants";

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin: 0 auto;

  @media screen and (max-width: ${smallBreakPoint}) {
    width: 180px;

    svg {
      height: 45px;
      width: 45px;
    }
  }
`;

const Contact = () => {
  return (
    <FadeIn>
      <Element name="contact">
        <Title>Contact</Title>
        <IconContainer>
          <ContactIcon
            icon={emailIcon}
            href="mailto: yaphet.abraha@gmail.com"
            isEmail
          />
          <ContactIcon
            icon={gitHubIcon}
            href="https://github.com/Yaphblaster"
          />
          <ContactIcon
            icon={linkedinIcon}
            href="https://www.linkedin.com/in/yaphet-abraha"
          />
        </IconContainer>
      </Element>
    </FadeIn>
  );
};

export default Contact;
