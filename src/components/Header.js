import styled, { css } from "styled-components";
import Logo from "../assets/logo.svg";
import PathLeft from "../assets/path-left.svg";
import PathRight from "../assets/path-right.svg";

const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

const LogoButton = styled.button`
  height: 100%;
  width: 25%;
  padding: 25px 30px;
  background: transparent;
  border: none;
  transition-duration: 0.4s;
  background-image: url(${Logo});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  :hover {
    transform: translateY(-0.25em);
    filter: drop-shadow(5px 5px 10px #ffffff);
  }
`;

const PathLeftButton = styled.button`
  padding: 5px;
  background: transparent;
  border: none;
  background-image: url(${PathLeft});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  fill: white;
  cursor: pointer;

  ${(p) =>
    p.disabled &&
    css`
      cursor: auto;
      opacity: 0.2;
    `}
`;

const PathRightButton = styled.button`
  padding: 5px;
  background: transparent;
  border: none;
  background-image: url(${PathRight});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  ${(p) =>
    p.disabled &&
    css`
      cursor: auto;
      opacity: 0.2;
    `}
`;

const Header = ({ setMissionIndex, missionIndex }) => {
  const isIndexPositive = missionIndex > 0;
  const isIndexExist = missionIndex < 9;

  return (
    <HeaderContainer>
      <PathLeftButton
        onClick={() => {
          setMissionIndex(missionIndex - 1);
        }}
        disabled={!isIndexPositive}
      ></PathLeftButton>
      <LogoButton
        onClick={() => {
          window.open("https://www.spacex.com/");
        }}
      ></LogoButton>
      <PathRightButton
        onClick={() => {
          setMissionIndex(missionIndex + 1);
        }}
        disabled={!isIndexExist}
      ></PathRightButton>
    </HeaderContainer>
  );
};

export default Header;
