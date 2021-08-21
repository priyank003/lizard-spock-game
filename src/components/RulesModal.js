import styled from "styled-components";
import rules from "../assets/images/image-rules-bonus.svg";
import close from "../assets/images/icon-close.svg";

import VideoModal from "./VideoModal";

const RulesModal = (props) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Backdrop onClick={props.onClose} />
      <Container>
        <Header>
          <p>RULES</p> <img src={close} onClick={props.onClose} alt="" />{" "}
        </Header>

        <VideoModal></VideoModal>
        <RulesSvg src={rules}></RulesSvg>
      </Container>
    </div>
  );
};

export default RulesModal;

const Container = styled.div`
  background: #fbf8f8fa;
  border-radius: 15px;
  position: fixed;
  top: 0;
  margin-top: 20px;
  width: 500px;
  z-index: 100;
  display: flex;
  flex-direction: column;

  @media (max-width: 550px) {
    transform: scale(0.9);
  }

  @media (max-width: 450px) {
    transform: scale(1);
    width: 100%;
    height: 100vh;
  }
`;
const Header = styled.div`
  font-family: "Barlow Semi Condensed", sans-serif;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  color: hsl(229, 25%, 31%);
  img {
    height: 20px;
    width: 20px;
  }
  p {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    margin-left: 10px;
  }
  span {
    font-size: 1.1rem;
    font-weight: 700;
  }
`;
const RulesSvg = styled.img`
  height: 250px;
  width: 250px;
  align-self: center;
  margin: 10px;
  @media (max-width: 450px) {
    transform: scale(0.7);
    margin: 0;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;
