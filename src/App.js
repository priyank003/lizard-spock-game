import styled from "styled-components";

import Home from "./components/Home";

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
const Container = styled.div`
  margin: 0;
  background: radial-gradient(
    circle at top,
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%)
  );
  height: 100vh;

  width: 100%;
  display: flex;
  justify-content: center;
`;
