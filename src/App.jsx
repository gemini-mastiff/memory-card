import { useState } from "react";
import MainMenu from "./components/MainMenu.jsx";
import MenuBtn from "./components/MenuBtn.jsx";
import GameScreen from "./components/GameScreen.jsx";
import "./App.css";

function App() {
  const [continent, setContinent] = useState("africa");
  const [countryArr, setCountryArr] = useState([]);
  const [difficulty, setDifficulty] = useState(0.25);
  const [activeGame, setActiveGame] = useState(false);

  const handleContinent = (e) => {
    setContinent(e.target.value);
  };

  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  return (
    <>
      <header className="header container">
        <h1>Country Memory Game</h1>
      </header>
      {activeGame ? (
        <GameScreen
          setActiveGame={setActiveGame}
          countryArr={countryArr}
          difficulty={difficulty}
        />
      ) : (
        <MainMenu
          handleContinent={handleContinent}
          handleDifficulty={handleDifficulty}
          setCountryArr={setCountryArr}
          setActiveGame={setActiveGame}
          continent={continent}
          difficulty={difficulty}
        />
      )}
    </>
  );
}

export default App;
