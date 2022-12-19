import styled from "styled-components";

const MissionWrapper = styled.div`
  width: 100%;
  margin: 30px 0 30px 0;
  display: flex;
  justify-content: space-between;
`;
const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MissionLine = styled.span`
  font-size: 10px;
  font-weight: 600;
  color: #868686;
  letter-spacing: 0.1em;
`;

const MissionName = styled.span`
  margin: 6px 0 12px 0;
  font-size: 28px;
  font-weight: 700;
  color: white;
`;

const RocketLine = styled.span`
  font-size: 10px;
  font-weight: 600;
  color: #868686;
  letter-spacing: 0.1em;
`;

const RocketContainer = styled.div`
  width: 140px;
  display: flex;
  justify-content: space-between;
`;

const RocketName = styled.span`
  margin: 4px 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: white;
`;

const RocketStatus = styled.div`
  background: #6fb46e;
  margin: 4px 0 4px 0;
  padding: 3px 5px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 9px;
  letter-spacing: 0.1em;
`;

const LearnMoreButton = styled.button`
  width: 120px;
  margin: 25px 0 0 0;
  padding: 15px 0;
  border: 1.5px solid #ffffff;
  background: transparent;
  z-index: 0;
  transition: border-color 0.35s ease, background 0.35s ease;
  font-weight: 500;
  font-size: 10px;
  color: #ffffff;
  cursor: pointer;

  ::before {
    background-color: white;
    content: "";
    display: block;
    position: absolute;
    top: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }

  &:hover {
    background-position: bottom;
    color: black;

    ::before {
      top: 0;
    }
  }
`;

const MissionDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const LaunchDateLine = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #868686;
  letter-spacing: 0.1em;
`;

const LaunchDate = styled.span`
  margin: 4px 0 12px 0;
  font-size: 14px;
  font-weight: 500;
  color: white;
`;

const LaunchSiteLine = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #868686;
  letter-spacing: 0.1em;
`;

const LaunchSite = styled.span`
  margin: 4px 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: white;
`;

const Mission = () => {
  return (
    <MissionWrapper>
      <MissionContainer>
        <MissionLine>MISSION</MissionLine>
        <MissionName>Starlink-12 (v1.0)</MissionName>
        <RocketLine>ROCKET</RocketLine>
        <RocketContainer>
          <RocketName>Falcon 9</RocketName>
          <RocketStatus>RECOVERED</RocketStatus>
        </RocketContainer>
        <LearnMoreButton>LEARN MORE</LearnMoreButton>
      </MissionContainer>

      <MissionDetailsContainer>
        <LaunchDateLine>LAUNCH DATE</LaunchDateLine>
        <LaunchDate>24 Jan 2021</LaunchDate>
        <LaunchSiteLine>LAUNCH SITE</LaunchSiteLine>
        <LaunchSite>KSC LC 39A</LaunchSite>
      </MissionDetailsContainer>
    </MissionWrapper>
  );
};

export default Mission;
