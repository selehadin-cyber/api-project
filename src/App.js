import React, { useState, useEffect } from "react";
import Add from "./API/test";
import "./App.css";

const paintData = {
  projectTypes: [{ name: "Interior" }, { name: "Exterior" }],

  sectors: [
    { name: "Hospital", costMultiplier: 1.1 },
    { name: "School", costMultiplier: 1 },
    { name: "Housing", costMultiplier: 0.9 },
    { name: "Hall", costMultiplier: 1 },
    { name: "Park", costMultiplier: 0.8 },
  ],

  products: [
    { name: "Glidden Pro", price: 0.4, redecorationCycle: 5 },
    { name: "Mustang Speedwall", price: 0.1, redecorationCycle: 1 },
    { name: "Lifemaster Accents", price: 0.8, redecorationCycle: 9 },
    { name: "Weatherward Max", price: 0.6, redecorationCycle: 3 },
    { name: "Acrylic Diamond", price: 0.8, redecorationCycle: 8 },
  ],

  colour: [
    { name: "Just White", hex: "#FFFFFF" },
    { name: "Elephant's breath", hex: "#d0c2b4" },
    { name: "Crown", hex: "#d64b30" },
    { name: "Julie's Dream", hex: "#efe3d8" },
    { name: "Dead Salmon", hex: "#c29e8f" },
    { name: "Nacho Chese", hex: "#ffc56d" },
    { name: "Little Greene", hex: "#7f5c56" },
  ],

  projectType_sector: [
    { type: "Interior", sector: "Hospital" },
    { type: "Exterior", sector: "Hospital" },
    { type: "Interior", sector: "School" },
    { type: "Exterior", sector: "School" },
    { type: "Interior", sector: "Housing" },
    { type: "Exterior", sector: "Housing" },
    { type: "Interior", sector: "Hall" },
    { type: "Exterior", sector: "Park" },
  ],

  sector_product: [
    { sector: "Hospital", product: "Glidden Pro" },
    { sector: "School", product: "Glidden Pro" },
    { sector: "Hall", product: "Glidden Pro" },
    { sector: "School", product: "Mustang Speedwall" },
    { sector: "Housing", product: "Mustang Speedwall" },
    { sector: "Park", product: "Mustang Speedwall" },
    { sector: "Hospital", product: "Lifemaster Accents" },
    { sector: "Housing", product: "Weatherward Max, Hall and Park" },
    { sector: "Hall", product: "Weatherward Max, Hall and Park" },
    { sector: "Park", product: "Weatherward Max, Hall and Park" },
    { sector: "Hospital", product: "Acrylic Diamond" },
    { sector: "School", product: "Acrylic Diamond" },
    { sector: "Housing", product: "Acrylic Diamond" },
    { sector: "Hall", product: "Acrylic Diamond" },
    { sector: "Park", product: "Acrylic Diamond" },
  ],
};
function App() {
  const [userSelectedProjectType, setUserSelectedProjectType] = useState("");

  return (
    <div>
      <h1>TEST</h1>
      <select name="projectType" id="projectType">
        {paintData.projectTypes.map((e, idx) => (
          <option
            value="" key={idx}
            onClick={() => {setUserSelectedProjectType(e.name)
            console.log(userSelectedProjectType)}}
          >
            {e.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
