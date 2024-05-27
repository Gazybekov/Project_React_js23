import React from "react";
import NewArrivals from "../homePage/NewArrivals";
import TopSelling from "../homePage/TopSelling";
import BrowseDress from "../homePage/BrowseDress";
import HeaderHomePage from "../homePage/HeaderHomePage";

const HomePage = () => {
  return (
    <div>
      <HeaderHomePage />
      <NewArrivals />
      <TopSelling />
      <BrowseDress />
    </div>
  );
};

export default HomePage;
