import styled from "styled-components";
import Ship from "../components/Ship";

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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 9px;
  grid-row-gap: 10px;

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .div3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .div4 {
    grid-area: 2 / 1 / 3 / 2;
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
