import React, { useState } from "react";

import CardGrid from "./components/cardGrid";
import Header from "./components/header";

import "./app.css";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  function handleClick(id) {
    if (clickedCards.includes(id)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setClickedCards([]);
    } else {
      setClickedCards([...clickedCards, id]);
      setScore(score + 1);
    }
  }

  return (
    <div id="app">
      <Header score={score} highScore={highScore} />
      <p class="rules">Click and choose images to increase your score.</p>
      <p class="rules">Clicking an image more than once will RESET your score!</p>
      <CardGrid clickHandler={handleClick} />
    </div>
  );
}

export default App;