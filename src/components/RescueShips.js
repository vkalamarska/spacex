import styled from "styled-components";
import Ship from "../components/Ship";
import { device } from "../utils/device";

const RescueShipsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0 40px 0;
`;

const RescueShipsLine = styled.div`
  margin: 0 0 20px 0;
  font-size: 10px;
  font-weight: 500;
  color: #868686;
  letter-spacing: 0.1em;
`;

const RescueShipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media ${device.laptop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const RescueShips = ({ missionData }) => {
  return (
    <RescueShipsWrapper>
      <RescueShipsLine>RESCUE SHIPS</RescueShipsLine>
      <RescueShipsContainer>
        {missionData.ships.map((s) => (
          <Ship ship={s} key={s.name}></Ship>
        ))}
      </RescueShipsContainer>
    </RescueShipsWrapper>
  );
};

export default RescueShips;
