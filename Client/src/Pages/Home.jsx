import React from "react";
import LandingPage from "../Components/HomePageComponents/LandingPage";
import Bestsellers from "../Components/HomePageComponents/Bestsellers";
import NewArrivals from "../Components/HomePageComponents/NewArrivals";


import Collection from "../Components/HomePageComponents/Collection";
import Offers from "../Components/HomePageComponents/Offers";
import Customize from "../Components/HomePageComponents/Customize";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <NewArrivals />
     <Offers/>
      <Bestsellers />
   <Customize/>
      <Collection />
    </div>
  );
};

export default Home;
