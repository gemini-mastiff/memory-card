import "../styles/GameScreen.css";
import { useState } from "react";

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
      <div className="game-over-container">
        <h2>{winState ? "You Win!" : "Game Over"}</h2>
        <p>{`Your Score: ${score} / ${scoreCap}`}</p>
        <p>{`High Score: ${highScore}`}</p>
        <button onClick={() => setActiveGame(false)}>Main Menu</button>
        <button onClick={handleNewGame}>Play Again?</button>
      </div>
    );
  }

  if (winState) {
    setPrevHighScore(highScore);
    setIsGameOver(true);
  }

  return (
    <div className="game-screen container">
      <p>{`${score} / ${scoreCap}`}</p>
      <p>{`High Score: ${highScore}`}</p>
      <div className="card-container">
        {randCards.map((card) => {
          return (
            <div
              className="card"
              key={card.name.common}
              onClick={() => handleCard(card.name.common)}
            >
              <div className="flag__container">
                <img
                  className="card__flag"
                  src={card.flags.svg}
                  alt={`${card.name.common} Flag`}
                />
              </div>
              <h2 className="card__title">{card.name.common}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
