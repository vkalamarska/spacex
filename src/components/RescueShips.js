import styled from "styled-components";
import Ship from "../components/Ship";

const RescueShipsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0 50px 0;
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
  justify-content: space-between;
`;

const RescueShips = () => {
  return (
    <RescueShipsWrapper>
      <RescueShipsLine>RESCUE SHIPS</RescueShipsLine>
      <RescueShipsContainer>
        <Ship
          ship={{
            homePort: "Port Canaveral",
            name: "GO Ms Tree",
            weight: "449964",
          }}
        ></Ship>
      </RescueShipsContainer>
    </RescueShipsWrapper>
  );
};

export default RescueShips;
