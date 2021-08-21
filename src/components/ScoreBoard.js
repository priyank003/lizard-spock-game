import styled from "styled-components";
import gamelogo from "../assets/images/logo-bonus.svg";

const ScoreBoard = (props) => {
  return (
    <Container>
      {" "}
      <img src={gamelogo} alt=""></img>
      <GameScore>
        <p>SCORE</p>
        <strong>{props.points}</strong>
      </GameScore>
    </Container>
  );
};
export default ScoreBoard;

const Container = styled.div`
  margin-top: 20px;
  border: 2px solid hsl(217, 16%, 45%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 100px;
  border-radius: 20px;
  padding: 20px;

  @media (max-width: 700px) {
    width: 100%;
  }
  @media (max-width: 550px) {
    width: 90%;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const GameScore = styled.div`
  padding: 20px 0px 20px 0px;
  border-radius: 15px;
  width: 130px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Barlow Semi Condensed", sans-serif;
    color: hsl(229, 64%, 46%);
    font-weight: 700;
    margin: 0;
    letter-spacing: 0.2em;
  }
  strong {
    font-size: 3em;
    color: hsl(229, 25%, 31%);
    font-weight: 700;
  }
`;
