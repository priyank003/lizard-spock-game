import styled from "styled-components";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import scissors from "../assets/images/icon-scissors.svg";
import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import lizard from "../assets/images/icon-lizard.svg";
import spock from "../assets/images/icon-spock.svg";
import { useState } from "react";

import React from "react";

const GameResult = (props) => {
  const player = parseInt(localStorage.getItem("playerSelected"));
  const comp = parseInt(localStorage.getItem("compSelected"));

  const options = [
    {
      key: 0,
      id: 0,
      name: "",
      image: "",
    },
    {
      key: 1,
      id: 1,
      name: "scissors",
      image: scissors,
      style: {
        border: "40px solid #df9a1d",

        boxShadow: "0px 0px 20px #df9a1d",
      },
    },
    {
      key: 2,
      id: 2,
      name: "paper",
      image: paper,
      style: {
        border: "40px solid #6a6af6",
        boxShadow: " 0px 0px 20px #4a4aa7",
      },
    },
    {
      key: 3,
      id: 3,
      name: "rock",
      image: rock,
      style: {
        border: "40px solid #eb2e1a",
        boxShadow: "0px 0px 20px #ff4700",
      },
    },
    {
      key: 4,
      id: 4,
      name: "lizard",
      image: lizard,
      style: {
        border: "40px solid #cc1fcc",
        boxShadow: "0px 0px 20px #ff00b1",
      },
    },
    {
      key: 5,
      id: 5,
      name: "spock",
      image: spock,
      style: {
        border: "40px solid #32b1e5",
        boxShadow: " 0px 0px 20px #02b4ab",
      },
    },
  ];

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 5 + 1);
  };

  const getResult = () => {
    let x = comp;
    let n = player;

    if (n === x) {
      return "tied";
    } else if (x === 5 && (n === 4 || n === 2)) {
      return true;
    } else if ((n + 1) % 5 === x || n === (x + 2) % 5) {
      return true;
    } else return false;
  };

  const [points, setPoints] = useState(props.backup);

  useState(() => {
    if (getResult() === true) {
      setPoints((points) => points + 1);
    }
  }, getRandomNumber);
  props.score(points);

  props.confetBool(getResult());

  const confetReset = () => {
    return props.confetBool(null);
  };

  return (
    <Route>
      <Container>
        <PlayerVsComp>
          <PlayerDiv>
            <p>YOU PICKED</p>
            {/* eslint-disable-next-line  */}
            {options.map((data) => {
              if (data.id === player) {
                return (
                  <PlayerSelect style={data.style}>
                    {" "}
                    <img src={data.image} alt=""></img>{" "}
                  </PlayerSelect>
                );
              }
            })}
          </PlayerDiv>
          <Result>
            <Resultwrap>
              {getResult() === "tied"
                ? "TIED"
                : getResult() === true
                ? "YOU WIN"
                : "YOU LOST"}
              <Link to="/lizard-spock-game">
                <ResetBtn onClick={confetReset}>PLAY AGAIN</ResetBtn>
              </Link>
            </Resultwrap>
          </Result>

          <CompDiv>
            <p> BOT PICKED</p>
            <ComputerSelect style={options[comp].style}>
              <img src={options[comp].image} alt="" />
            </ComputerSelect>
          </CompDiv>
        </PlayerVsComp>
      </Container>
    </Route>
  );
};

export default GameResult;
export const Container = styled.div`
  margin-top: 70px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900px) {
    transform: scale(0.8);
  }
  @media (max-width: 700px) {
    height: 100%;
    margin-top: 20px;
  }
  @media (max-width: 450px) {
    overflow: hidden;

    width: 100vw;
  }
`;
const PlayerVsComp = styled.div`
  display: flex;
  justify-content: space-around;

  height: 100%;
  overflow: visible;
`;
const PlayerSelect = styled.div`
  @media (max-width: 450px) {
    transform: scale(0.45);
  }
`;
const ComputerSelect = styled.div`
  @media (max-width: 450px) {
    transform: scale(0.45);
  }
`;
const Result = styled.div`
  align-self: center;
  width: 300px;
  text-align: center;
  display: flex;
  flex-direction: coumn;
  justify-content: center;

  margin: 0px 20px 0px 20px;

  color: white;

  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 800;
  font-size: 4rem;
  @media (max-width: 450px) {
    position: fixed;
    z-index: 10;
    margin-top: 160px;
  }
`;
const ResetBtn = styled.button`
  text-align: center;
  width: 70%;
  margin: 0;
  cursor: pointer;

  height: 50px;
  border-radius: 10px;
  border: none;
  background: white;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: hsl(229, 25%, 31%);
`;
const PlayerDiv = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;

  div {
    height: 160px;
    width: 160px;

    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 80px;
      width: 80px;
    }
  }
  p {
    font-family: "Barlow Semi Condensed", sans-serif;
    color: white;
    letter-spacing: 2px;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0px 10px 0px 10;
    align-self: center;
  }
  @media (max-width: 450px) {
    margin-right: 0;
    p {
      margin: 0;
      font-size: 1.2rem;
    }
  }
`;
const CompDiv = styled.div`
  overflow: visible;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  div {
    height: 160px;
    width: 160px;

    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 80px;
      width: 80px;
    }
  }
  p {
    font-family: "Barlow Semi Condensed", sans-serif;
    color: white;
    letter-spacing: 2px;
    font-size: 1.5rem;
    font-weight: 700;

    align-self: center;
  }
  @media (max-width: 450px) {
    margin-left: 0;
    overflow: visible;
    p {
      margin: 0;
      font-size: 1.2rem;

      margin-left: 6px;
    }
  }
`;

const Resultwrap = styled.div`
  margin: 10px;
`;
