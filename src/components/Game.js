import styled from "styled-components";

import scissors from "../assets/images/icon-scissors.svg";
import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import lizard from "../assets/images/icon-lizard.svg";
import spock from "../assets/images/icon-spock.svg";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Game = (props) => {
  props.confetBool(null);
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 5 + 1);
  };
  const clickHandler = (e) => {
    localStorage.clear();

    localStorage.setItem("playerSelected", `${e.target.id}`);
    localStorage.setItem("compSelected", `${getRandomNumber()}`);
  };

  return (
    <Route>
      {" "}
      <Container>
        <GameBase>
          <Rowone>
            {" "}
            <Link to="/gameresult">
              {" "}
              <IconWrapper>
                <ScissorsWrapper id={1} onClick={clickHandler}>
                  <Scissors id={1} src={scissors} alt="scissors"></Scissors>
                </ScissorsWrapper>
              </IconWrapper>
            </Link>
          </Rowone>
          <RowTwo>
            {" "}
            <Link to="/gameresult">
              <IconWrapper>
                {" "}
                <SpockWrapper id={5} onClick={clickHandler}>
                  <Spock id={5} src={spock} alt="spock"></Spock>
                </SpockWrapper>
              </IconWrapper>
            </Link>
            <Link to="/gameresult">
              <IconWrapper>
                <PaperWrapper id={2} onClick={clickHandler}>
                  {" "}
                  <Paper id={2} src={paper} alt="paper"></Paper>
                </PaperWrapper>
              </IconWrapper>
            </Link>
          </RowTwo>
          <RowThree>
            {" "}
            <Link to="/gameresult">
              <IconWrapper>
                <LizardWrapper id={4} onClick={clickHandler}>
                  <Lizard id={4} src={lizard} alt="lizard"></Lizard>
                </LizardWrapper>
              </IconWrapper>
            </Link>
            <Link to="/gameresult">
              <IconWrapper>
                <RockWrapper id={3} onClick={clickHandler}>
                  {" "}
                  <Rock id={3} src={rock} alt="rock"></Rock>
                </RockWrapper>
              </IconWrapper>
            </Link>
          </RowThree>
        </GameBase>
      </Container>
    </Route>
  );
};

export default Game;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  width: 450px;
  @media (max-width: 700px) {
    width: 90%;
  }
  @media (max-width: 590px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    margin-top: 10px;
    transform: scale(0.8);
  }
  @media (max-width: 450px) {
    transform: scale(0.8);
    width: 450px;
  }
`;
const GameBase = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 50;
`;

const ScissorsWrapper = styled.div`
  bottom: 70%;
  left: 30%;
  border: 20px solid orange;
  :hover {
    border-color: #df9a1d;
    box-shadow: 0px 0px 20px orange;
  }
`;
const PaperWrapper = styled.div`
  top: 20%;
  left: 80%;
  border: 20px solid #6a6af6;
  :hover {
    box-shadow: 0px 0px 20px #4a4aa7;
  }
`;
const RockWrapper = styled.div`
  top: 80%;
  right: -10%;
  border: 20px solid #eb2e1a;
  :hover {
    box-shadow: 0px 0px 20px #ff4700;
  }
`;
const LizardWrapper = styled.div`
  top: 80%;
  left: -10%;

  border: 20px solid #cc1fcc;
  :hover {
    box-shadow: 0px 0px 20px #ff00b1;
  }
`;
const SpockWrapper = styled.div`
  top: 20%;
  right: 80%;
  border: 20px solid #32b1e5;

  :hover {
    box-shadow: 0px 0px 20px #02b4ab;
  }
`;

const Scissors = styled.img``;
const Paper = styled.img``;
const Rock = styled.img``;
const Lizard = styled.img``;
const Spock = styled.img``;
const Rowone = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const RowTwo = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;
const RowThree = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
const IconWrapper = styled.div`
  div {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div:hover {
    transform: scale(1.2);

    transition-timing-function: ease-in;

    transition: 0.2s;
  }
`;
