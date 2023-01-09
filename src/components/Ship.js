import styled from "styled-components";
import { device } from "../utils/device";

const ShipComponent = styled.div`
  width: 235px;
  height: 230px;
  margin: 0 5px 20px 5px;
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
  }

  @media ${device.tablet} {
  }
`;

const ShipImage = styled.div`
  width: 100%;
  height: 60%;
  background-image: url(${(p) => p.imageUrl});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ShipDetailsContainer = styled.div`
  width: 100%;
  height: 40%;
  background-color: white;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const ShipName = styled.span`
  margin: 8px 8px 0 8px;
  font-size: 16px;
  font-weight: 700;
`;

const Line = styled.div`
  margin: 8px 8px 0px 8px;
  border-bottom: 1px solid #e8e8e8; ;
`;

const ShipDetails = styled.div`
  margin: 12px 8px 8px 8px;
  display: flex;

  @media ${device.mobile} {
    margin: 9px 8px 6px 8px;
  }
`;

const LabelsContainer = styled.div`
  margin: 0 20px 0 0;
  display: flex;
  flex-direction: column;
`;

const HomePortLine = styled.span`
  margin: 0 0 6px 0;
  color: #868686;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.1em;
`;

const WeightLine = styled.span`
  color: #868686;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.1em;
`;

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePort = styled.span`
  margin: 0 0 3px 0;
  font-size: 11px;
  font-weight: 700;
`;

const Weight = styled.span`
  font-size: 11px;
  font-weight: 700;
`;

const Ship = ({ ship }) => {
  return (
    <ShipComponent>
      <ShipImage imageUrl={ship.image}></ShipImage>
      <ShipDetailsContainer>
        <ShipName>{ship.name}</ShipName>
        <Line></Line>
        <ShipDetails>
          <LabelsContainer>
            <HomePortLine>HOME PORT</HomePortLine>
            <WeightLine>WEIGHT [KG]</WeightLine>
          </LabelsContainer>
          <ValuesContainer>
            <HomePort>{ship.home_port}</HomePort>
            <Weight>{ship.weight_kg}</Weight>
          </ValuesContainer>
        </ShipDetails>
      </ShipDetailsContainer>
    </ShipComponent>
  );
};

export default Ship;
