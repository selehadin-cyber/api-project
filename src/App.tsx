import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [nameArray, setNameArray] = useState([]);
  const [rawData, setRawData] = useState("");
  const [imageIndex, setImageIndex] = useState(1);
  const [userName, setUserName] = useState([]);
  const [userPicURL, setUserPicURL] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [counter, setCounter] = useState(1);

  const fetchPokemonData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setRawData(JSON.stringify(data));
        setNameArray(data.results);
        console.log(nameArray);
      });
  };
  const url = `https://randomuser.me/api/?results=${counter}`;
  const fetchUserData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDataArray(data.results);
        /* setUserName(
          data.results[counter].name.title +
            " " +
            data.results[counter].name.first +
            " " +
            data.results[counter].name.last
        );
        setUserPicURL(data.results[0].picture.large) */
      });
  };

  useEffect(() => {
    fetchPokemonData();
    fetchUserData();
    console.log(counter)
  }, [counter]);
  return (
    <div className="App">
      <select name="test" id="test">
        {nameArray.map((e, idx) => (
          <option
            key={idx}
            value={idx + 1}
            onClick={(e) => {
              setImageIndex(e.target.value);
            }}
          >
            {e.name}
          </option>
        ))}
      </select>
      {/*<pre>{rawData}</pre>*/}
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageIndex}.png`}
        alt="pokemon"
      />
      <button
        onClick={() => {
          setCounter(counter => counter + 1);
        }}
      >
        see more users
      </button>
      {dataArray.map((e) => (
        <div>
          <div>{e.name.title +
            " " +
            e.name.first +
            " " +
            e.name.last}</div>
            <img src={e.picture.large} alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;
