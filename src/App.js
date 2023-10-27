import styled from "styled-components";
import MissionExplorer from "./components/MissionExplorer";
import { useState, useEffect } from "react";
import { device } from "./utils/device";

const AppWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  background-color: rgba(67, 67, 67, 1);
  background-image: linear-gradient(
    313deg,
    rgba(67, 67, 67, 1) 0%,
    rgba(0, 0, 0, 1) 65%
  );
  background-size: cover;

  @media ${device.tablet} {
    width: 100%;
    min-height: 100%;
    display: flex;
  }
`;

function App() {
  const [apiDataLaunches, setApiDataLaunches] = useState(null);
  const [apiDataShips, setApiDataShips] = useState(null);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches/past")
      .then((res) => res.json())
      .then((result) => {
        const launchesWithShips = result
          .filter((launch) => launch.ships.length > 1)
          .sort(
            (a, b) =>
              new Date(b.launch_date_utc).getTime() -
              new Date(a.launch_date_utc).getTime()
          )
          .slice(0, 12);
        setApiDataLaunches(launchesWithShips);
        console.log(launchesWithShips);
      });

    fetch("https://api.spacexdata.com/v3/ships")
      .then((res) => res.json())
      .then((result) => {
        setApiDataShips(result);
        console.log(result);
      });
  }, []);

  if (!apiDataLaunches || !apiDataShips) {
    return <div>Loading</div>;
  }

  return (
    <AppWrapper>
      <MissionExplorer
        allMissions={apiDataLaunches}
        allShips={apiDataShips}
      ></MissionExplorer>
    </AppWrapper>
  );
}

export default App;
