import Mission from "./Mission";
import Header from "./Header";
import RescueShips from "./RescueShips";
import styled from "styled-components";
import { useState, useEffect } from "react";

const AppContainer = styled.div`
  width: 55%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Line = styled.span`
  width: 100%;
  border-bottom: 1px solid #5c5c5d;
  line-height: 1em;
`;

const MissionExplorer = ({ allMissions }) => {
  const [missionIndex, setMissionIndex] = useState(0);

  const missionData = allMissions[missionIndex];

  return (
    <AppContainer>
      <Header
        setMissionIndex={setMissionIndex}
        missionIndex={missionIndex}
      ></Header>
      <Line></Line>
      <Mission missionData={missionData}></Mission>
      <Line></Line>
      <RescueShips missionData={missionData}></RescueShips>
    </AppContainer>
  );
};

export default MissionExplorer;
