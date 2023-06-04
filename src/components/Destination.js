// import Mountain1 from "../assets/images(1).jpeg";
// import Mountain2 from "../assets/download(2).jpeg";

import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
// import DestinationData

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you opportunity to explore</p>
      {/* <div className="first-des"> */}

      <DestinationData
        heading="Ghumo Firoo"
        text="Hawaii (/həˈwaɪi/ (listen) hə-WY-ee; Hawaiian: Hawaiʻi [həˈvɐjʔi] or [həˈwɐjʔi]) is a state in the Western United States, about 2,000 miles (3,200 km) from the U.S. mainland in the Pacific Ocean. It is the only U.S. state outside North America, the only state that is an archipelago, and the only state in the tropics.
      Hawaii consists of 137 volcanic islands that comprise almost the entire Hawaiian archipelago; spanning 1,500 miles (2,400 km), the state is physiographically and ethnologically part of the Polynesian subregion of Oceania.[9] Hawaii's ocean coastline is consequently the fourth-longest in the U.S., at about 750 miles (1,210 km).[d] The eight main islands, from northwest to southeast, are Niʻihau, Kauaʻi, Oʻahu, Molokaʻi, Lānaʻi, Kahoʻolawe, Maui, and Hawaiʻi, after which the state is named; it is often called the "
      />
    </div>
    // </div>
  );
};
export default Destination;
