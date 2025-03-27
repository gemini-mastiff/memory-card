import { useEffect } from "react";
import MenuBtn from "./MenuBtn.jsx";
import "../styles/MainMenu.css";

export default function MainMenu({
  handleContinent,
  handleDifficulty,
  setCountryArr,
  setActiveGame,
  continent,
  difficulty,
}) {
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
  }, [continent, setCountryArr]);

  return (
    <>
      <section className="menu container">
        <div className="button-container">
          <MenuBtn
            name="Africa"
            value="africa"
            onClick={handleContinent}
            stateValue={continent}
          />
          <MenuBtn
            name="Americas"
            value="americas"
            onClick={handleContinent}
            stateValue={continent}
          />
          <MenuBtn
            name="Asia"
            value="asia"
            onClick={handleContinent}
            stateValue={continent}
          />
          <MenuBtn
            name="Europe"
            value="europe"
            onClick={handleContinent}
            stateValue={continent}
          />
          <MenuBtn
            name="Oceania"
            value="oceania"
            onClick={handleContinent}
            stateValue={continent}
          />
        </div>
        <div className="button-container">
          <MenuBtn
            name="Easy"
            value={0.25}
            onClick={handleDifficulty}
            stateValue={difficulty}
          />
          <MenuBtn
            name="Medium"
            value={0.5}
            onClick={handleDifficulty}
            stateValue={difficulty}
          />
          <MenuBtn
            name="Hard"
            value={0.75}
            onClick={handleDifficulty}
            stateValue={difficulty}
          />
          <MenuBtn
            name="Expert"
            value={1}
            onClick={handleDifficulty}
            stateValue={difficulty}
          />
        </div>
        <div className="start-button-container">
          <MenuBtn
            name="Start Game"
            value={null}
            onClick={() => setActiveGame(true)}
          />
        </div>
      </section>
    </>
  );
}
