import React from "react";
import { VectorMap } from "react-jvectormap";
const mapData = {
  CN: 1000,
  IN: 400,
  SA: 800,
  EG: 70,
  SE: 0,
  FI: 0,
  FR: 0,
  US: 20
};

/**
 const handleClick = (e, countryCode) => {
  console.log(countryCode);
};

const handleShow = (e, countryCode, mapData) => {
  console.log(countryCode);
};
*/

const MapChart = () => {
  return (
    <div>
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent" //change it to ocean blue: #0077be
        zoomOnScroll={false}
        containerStyle={{
          width: "100%",
          height: "520px"
        }}
        //onRegionClick={handleClick} //gets the country code
        //onRegionTipShow = {handleShow} //legende quand on passe la souris sur un pays
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer"
          }, 
        }}
        series={{
          regions: [
            {
              values: mapData, //this is your data
              scale: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"], //your color game's here
              // normalizeFunction: "polynomial",
              legend: {
                    vertical: true
                 }
            }
          ]
        }}
      />
    </div>
  );
};
export default MapChart;