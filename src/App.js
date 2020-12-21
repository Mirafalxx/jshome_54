import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [cubes, setCubes] = useState([]);
  //
  const createBoard = () => {
    const randomIndex = Math.floor(Math.random() * (36 - 0 + 1)) + 0;
    const tempObj = [];
    console.log(randomIndex);
    for (let i = 0; i < 36; i++) {
      tempObj.push(i);
    }
    setCubes([...cubes, ...tempObj]);
    // console.log(cubes);
    console.log(tempObj[randomIndex]);
    // console.log(...tempObj);
  };
  if (cubes.length === 0) {
    createBoard();
  }

  return (
    <div className="App">
      <div className="cubes-board">
        {cubes.map((elem) => {
          return <div className="cube" key={elem}></div>;
        })}
      </div>
      <button onClick={createBoard}>reset</button>
    </div>
  );
};

export default App;
