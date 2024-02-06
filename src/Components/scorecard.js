import React from "react";

import "./scoreCard.css";

/**
 * display the player's score.
 *
 * @param {object} props -  pass to the component
 * @param {number} props.score - current score
 * @param {number} props.highScore - highest score the player has achieved
 */
function ScoreCard(props) {
  const { score, highScore } = props;
  return (
    <div id="scoreCard">
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}

export default ScoreCard;