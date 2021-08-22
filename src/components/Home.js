import styled from "styled-components";
import ScoreBoard from "./ScoreBoard";
import Game from "./Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameResult from "./GameResult";
import { useState } from "react";
import RulesModal from "./RulesModal";
import Confet from "./Confetti";
import win from "../assets/sound/mixkit-win.wav";
import lose from "../assets/sound/mixkit-lose.wav";
import useSound from "use-sound";
const Home = () => {
  const [pts, setPts] = useState(0);
  const scoreHandler = (pts) => {
    setPts(pts);
  };

  const [rulesModal, setRulesmodal] = useState(null);

  const clickHandler = () => {
    setRulesmodal(true);
  };

  const modalClose = () => {
    setRulesmodal(null);
  };

  const [playWin] = useSound(win);
  const [playLose] = useSound(lose);

  const [confet, setConfet] = useState(false);

  const confetHandler = (bool) => {
    bool === true ? setConfet(true) : setConfet(false);

    if (bool === true) {
      return playWin();
    } else if (bool === false) return playLose();
  };

  return (
    <Router>
      <Container>
        {confet && <Confet />}

        <ScoreBoard points={pts} />
        {rulesModal && <RulesModal onClose={modalClose} />}

        <Switch>
          <Route path="/gameresult">
            <GameResult
              score={scoreHandler}
              backup={pts}
              confetBool={confetHandler}
            />{" "}
          </Route>
          <Route path="/lizard-spock-game">
            <Game confetBool={confetHandler} />
            <Rules onClick={clickHandler}>RULES</Rules>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default Home;

const Container = styled.div`
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 700px) {
    width: 80%;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    width: 95%;
    margin: 0;
  }
`;
const Rules = styled.button`
  width: 140px;
  height: 50px;
  align-self: flex-end;
  margin-right: 20px;
  margin-top: 10px;

  bottom: 20px;

  background: transparent;
  border: 2px solid white;
  color: white;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 1.3rem;
  border-radius: 15px;
  padding: 0px 10px 0px 10px;

  :hover {
    box-shadow: 0px 0px 5px #f8ebeb;
  }
  @media (max-width: 800px) {
    transform: scale(0.8);
    margin-top: 25px;
    align-self: center;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;
