import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [nameArray, setNameArray] = useState([]);
  const [rawData, setRawData] = useState("");
  const [imageIndex, setImageIndex] = useState(1)

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setRawData(JSON.stringify(data), null, 2);
        setNameArray(data.results);
        console.log(nameArray);
      });
  }, []);
  return (
    <div className="App">
      <select name="test" id="test">
        {nameArray.map((e, idx) => <option key={idx} value={idx + 1} onClick={(e) => {setImageIndex(e.target.value)}}>{e.name}</option>)}
      </select>
      {/*<pre>{rawData}</pre>*/}
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageIndex}.png`} alt="pokemon" />
    </div>
  );
}

export default App;
