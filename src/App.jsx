import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [continent, setContinent] = useState("africa");
  const [countryArr, setCountryArr] = useState([]);
  const [difficulty, setDifficulty] = useState(0.25);

  const handleContinent = (e) => {
    console.log(e.target.value);
    setContinent(e.target.value);
  };

  const handleDifficulty = (e) => {
    console.log(e.target.value);
    setDifficulty(e.target.value);
  };

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

  return (
    <>
      <header className="header container">
        <h1>Country Memory Game</h1>
      </header>
      <section className="menu container">
        <div className="button-container">
          <button
            className="menu__btn"
            value="africa"
            onClick={handleContinent}
          >
            Africa
          </button>
          <button
            className="menu__btn"
            value="americas"
            onClick={handleContinent}
          >
            Americas
          </button>
          <button className="menu__btn" value="asia" onClick={handleContinent}>
            Asia
          </button>
          <button
            className="menu__btn"
            value="europe"
            onClick={handleContinent}
          >
            Europe
          </button>
          <button
            className="menu__btn"
            value="oceania"
            onClick={handleContinent}
          >
            Oceania
          </button>
        </div>
        <div className="button-container">
          <button className="menu__btn" value={0.25} onClick={handleDifficulty}>
            Easy
          </button>
          <button className="menu__btn" value={0.5} onClick={handleDifficulty}>
            Medium
          </button>
          <button className="menu__btn" value={0.75} onClick={handleDifficulty}>
            Hard
          </button>
          <button className="menu__btn" value={1} onClick={handleDifficulty}>
            Expert
          </button>
        </div>
        <div className="start-button-container">
          <button
            className="menu__btn--start"
            onClick={() => setActiveGame(true)}
          >
            Start Game
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
