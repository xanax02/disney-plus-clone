import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
      </Background>
      <ImgTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GropWatchButton>
          <img src="/images/group-icon.png" />
        </GropWatchButton>
      </Controls>
      <Subtitle>asldkfj asdjf ajsdflj safdj saljdf</Subtitle>
      <Description>
        asdfjasldfjal;sdfj;lksajf;lkasdjf;lksajdfsdfjkhskdfjhweubvskghwiuviuh
      </Description>
    </Container>
  );
};

export default Detail;

//////Styled Components///////////

const Container = styled.div`
  height: calc(100vh - 70px);
  padding: calc(3.5vw - 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.7;

  img {
    height: 100%;
    width: 100%;
  }
`;

const ImgTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-height: 200px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 20px;
  border: none;
  background: rgb(249, 249, 249);
  border-radius: 4px;
  margin-right: 15px;
  height: 50px;
  letter-spacing: 1.08px;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  text-transform: uppercase;
  background: rgba(249, 249, 249, 0.3);
  border: 1px solid rgb(249, 249, 249);
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  disply: flex;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  color: white;
  cursor: pointer;
  margin-right: 15px;
  span {
    font-size: 25px;
  }
`;

const GropWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const Subtitle = styled.div`
  margin-top: 20px;
  font-size: 15px;
  min-height: 20px;
  color: rbg(249, 249, 249);
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 18px;
  margin-top: 10px;
  color: rbg(249, 249, 249);
`;
