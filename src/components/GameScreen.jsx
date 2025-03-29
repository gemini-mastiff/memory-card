import "../styles/GameScreen.css";
import { useState } from "react";
import CountryCard from "./CountryCard.jsx";
import MenuBtn from "./MenuBtn.jsx";

function randomCards(arr, usedCards) {
  let newArr = [];
  let copy = [...arr];
  let loop = true;
  while (loop) {
    for (let i = 0; i < 3; i++) {
      const randIndex = Math.floor(Math.random() * copy.length);
      const selection = copy[randIndex];
      newArr.push(selection);
      copy.splice(randIndex, 1);
    }
    for (let i = 0; i < 3; i++) {
      if (!usedCards.includes(newArr[i])) loop = false;
    }
  }
  return newArr;
}

export default function GameScreen({ setActiveGame, countryArr, difficulty }) {
  const [usedCards, setUsedCards] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [prevHighScore, setPrevHighScore] = useState(0);

  const randCards = randomCards(countryArr, usedCards);
  const score = usedCards.length;
  const scoreCap = Math.floor(countryArr.length * difficulty);
  const highScore = score > prevHighScore ? score : prevHighScore;
  let winState = score === scoreCap;

  const handleCard = (value) => {
    if (!usedCards.includes(value)) {
      setUsedCards([...usedCards, value]);
    } else {
      setPrevHighScore(highScore);
      setIsGameOver(true);
    }
  };

  const handleNewGame = () => {
    setUsedCards([]);
    setIsGameOver(false);
  };

  if (isGameOver) {
    return (
      <div className="game-over-container container">
        <div className="display-game-over">
          <h2>{winState ? "You Win!" : "Game Over"}</h2>
          <div className="game-over-score">
            <p>{`Your Score: ${score} / ${scoreCap}`}</p>
            <p>{`High Score: ${highScore}`}</p>
          </div>
        </div>
        <div className="btn-container--game-over">
          <MenuBtn name="Main Menu" onClick={() => setActiveGame(false)} />
          <MenuBtn name="Play Again?" onClick={handleNewGame} />
        </div>
      </div>
    );
  }

  if (winState) {
    setPrevHighScore(highScore);
    setIsGameOver(true);
  }

  return (
    <div className="game-screen">
      <div className="game-header container">
        <MenuBtn name="Main Menu" onClick={() => setActiveGame(false)} />
        <div className="score-container">
          <p>{`${score} / ${scoreCap}`}</p>
          <p>{`High Score: ${highScore}`}</p>
        </div>
      </div>
      <div className="card-container container">
        {randCards.map((card) => {
          return (
            <CountryCard
              key={card.name.common}
              name={card.name.common}
              flag={card.flags.svg}
              onClick={() => handleCard(card.name.common)}
            />
          );
        })}
      </div>
    </div>
  );
}
