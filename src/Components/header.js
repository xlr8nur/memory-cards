import React from "react";
import ScoreCard from "./scorecard";
import "./header.css";

function Header(props) {
    const {score, highScore} = props;
    return (
        <div id="header">
            <h1>Memory Cards</h1>
            <ScoreCard score={score} highScore={highScore} />
        </div>
    );
}

export default Header;