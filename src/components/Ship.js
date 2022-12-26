import Image from "../assets/image.png";
import styled from "styled-components";

const ShipComponent = styled.div`
  width: 250px;
  height: 235px;
  display: flex;
  flex-direction: column;
`;

const ShipImage = styled.div`
  width: 100%;
  height: 60%;
  background-image: url(${(p) => p.imageUrl});
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

const ShipDetailsContainer = styled.div`
  width: 100%;
  height: 40%;
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const ShipName = styled.span`
  margin: 8px 10px 0 10px;
  font-size: 18px;
  font-weight: 700;
`;

const Line = styled.div`
  margin: 7px 10px 0px 10px;
  border-bottom: 1px solid #e8e8e8; ;
`;

const ShipDetails = styled.div`
  margin: 10px;
  display: flex;
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
