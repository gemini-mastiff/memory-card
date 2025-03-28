import { useState, useEffect } from "react";
import MainMenu from "./components/MainMenu.jsx";
import MenuBtn from "./components/MenuBtn.jsx";
import GameScreen from "./components/GameScreen.jsx";
import "./App.css";

function App() {
  const [continent, setContinent] = useState("africa");
  const [countryArr, setCountryArr] = useState([]);
  const [difficulty, setDifficulty] = useState(0.25);
  const [activeGame, setActiveGame] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${continent}?fields=name,flags`
        );
        const json = await response.json();
        setCountryArr(json);
      } catch (error) {
        throw new Error(error);
      }
    }

    fetchData();
  }, [continent]);

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
          setActiveGame={setActiveGame}
          continent={continent}
          difficulty={difficulty}
        />
      )}
    </>
  );
}

export default App;
