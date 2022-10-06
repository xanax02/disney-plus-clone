import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTAone src="/images/cta-logo-one.svg" />
        <SignUp>get all there</SignUp>
        <Description>
          ​Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTAtwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;

////////// Styled Components;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  padding: calc(3.5vw - 5px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    background-image: url("/images/login-background.jpg");
    background-size: cover;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  width: 80vw;
  margin-top: -100px;
  display: flex;
  flex-direction: column;
`;

const CTAone = styled.img``;

const SignUp = styled.a`
  background-color: #0063e5;
  padding: 12px 0;
  text-align: center;
  color: #f9f9f9;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: bold;
  font-size: 18px;
  margin-top: 5px;
  transition: all 0.25s;
  cursor: pointer;
  margin-bottom: 12px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.div`
  font-size: 11px;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const CTAtwo = styled.img``;
