import React from "react";

import createCards from "./card";

import "./cardGrid.css";

function CardGrid(props) {
  const { clickHandler } = props;
  let cards = createCards(clickHandler);

  /* shuffle-ing */
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }

  return <div id="cardGrid">{cards}</div>;
}

export default CardGrid;