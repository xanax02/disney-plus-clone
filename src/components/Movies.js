import React from "react";
import styled from "styled-components";

const Movies = () => {
  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  margin-top: 20px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.69) 0 26px 30px -10px;
  cursor: pointer;
  transition: all 0.25s;

  img {
    height: 100%;
    width: 100%;
    background-size: cover;
  }

  &:hover {
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
  }
`;
