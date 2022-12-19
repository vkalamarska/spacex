import styled from "styled-components";
import Header from "./components/Header";
import Mission from "./components/Mission";
import RescueShips from "./components/RescueShips";

const AppWrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  background-color: rgba(67, 67, 67, 1);
  background-image: linear-gradient(
    313deg,
    rgba(67, 67, 67, 1) 0%,
    rgba(0, 0, 0, 1) 65%
  );
`;

const AppContainer = styled.div`
  width: 55%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Line = styled.span`
  width: 100%;
  border-bottom: 1px solid #5c5c5d; position: absolute
  line-height: 1px;
`;

function App() {
  return (
    <AppWrapper>
      <AppContainer>
        <Header></Header>
        <Line></Line>
        <Mission></Mission>
        <Line></Line>
        <RescueShips></RescueShips>
      </AppContainer>
    </AppWrapper>
  );
}

export default App;
