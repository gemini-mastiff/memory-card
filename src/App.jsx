import { useState } from "react";
import MainMenu from "./components/MainMenu.jsx";
import MenuBtn from "./components/MenuBtn.jsx";
import "./App.css";

function App() {
  const [continent, setContinent] = useState("africa");
  const [countryArr, setCountryArr] = useState([]);
  const [difficulty, setDifficulty] = useState(0.25);
  const [activeGame, setActiveGame] = useState(false);

  const handleContinent = (e) => {
    console.log(e.target.value);
    setContinent(e.target.value);
  };

  const handleDifficulty = (e) => {
    console.log(e.target.value);
    setDifficulty(e.target.value);
  };

  return (
    <>
      <header className="header container">
        <h1>Country Memory Game</h1>
      </header>
      {activeGame ? (
        <h1>Active Game!</h1>
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
