import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components/macro";
import gitHubIcon from "../../assets/gitHubIcon.svg";
import linkedinIcon from "../../assets/linkedIn.svg";
import emailIcon from "../../assets/email.svg";
import ContactIcon from "../ContactIcon/ContactIcon";
import Title from "../Title";

const IconContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  max-width: 200px;
`;

const Contact = () => {
  return (
    <Element name="contact">
      <Title>Contact</Title>
      <IconContainer>
        <ContactIcon
          icon={emailIcon}
          href="mailto: stephanie.pops@gmail.com"
          isEmail
        />
        <ContactIcon
          icon={gitHubIcon}
          href="https://github.com/stephaniepops"
        />
        <ContactIcon
          icon={linkedinIcon}
          href="https://www.linkedin.com/in/stephaniepops"
        />
      </IconContainer>
    </Element>
  );
};

export default Contact;
