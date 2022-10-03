import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: calc(3.5vw - 20px);
  padding-top: 1rem !important;
  position: relative;
  overflow: hidden;

  &:before {
    background: url("/images/home-background.png") center center no-repeat fixed;
    background-size: cover;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
