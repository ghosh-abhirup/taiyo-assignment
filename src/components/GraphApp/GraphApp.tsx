import React from "react";
import Navbar from "../Navbar";
import LineGraph from "./LineGraph";
import LeafletMap from "./LeafletMap";

const GraphApp = () => {
  return (
    <div className="">
      <Navbar />
      <div className="containerDiv">
        <div className="w-full text-white flex flex-col items-center">
          <p className="font-bold text-2xl ">Charts and Maps</p>
          <p className="mt-5 text-lg sm:text-2xl font-bold underline underline-offset-4">
            Line Charts
          </p>
          <LineGraph />
          <p className="mt-5 text-lg sm:text-2xl font-bold underline underline-offset-4">
            Map Visualisation
          </p>
          <LeafletMap />
        </div>
      </div>
    </div>
  );
};

export default GraphApp;
