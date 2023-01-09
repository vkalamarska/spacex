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
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch(`https://api.spacex.land/graphql/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{
          launchesPast(limit: 10) {
            mission_name
            launch_site {
              site_name_long
              site_name
            }
            links {
              article_link
              video_link
            }
            rocket {
              rocket_name
              fairings {
                recovered
              }
            }
            ships {
              name
              home_port
              image
              weight_kg
            }
            launch_date_utc
          }
        }
        `,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setApiData(result);
        console.log(result);
      });
  }, []);

  if (!apiData) {
    return <div>Loading</div>;
  }

  return (
    <AppWrapper>
      <MissionExplorer
        allMissions={apiData?.data.launchesPast}
      ></MissionExplorer>
    </AppWrapper>
  );
}

export default App;
