import MenuBtn from "./MenuBtn.jsx";
import "../styles/MainMenu.css";

export default function MainMenu({
  handleContinent,
  handleDifficulty,
  setActiveGame,
  continent,
  difficulty,
}) {
  return (
    <>
      <section className="menu">
        <div className="button-section container">
          <h2 className="button-header">Continent</h2>
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
        </div>
        <div className="button-section container">
          <h2 className="button-header">Difficulty</h2>
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
        </div>
        <div className="start-button-container container">
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
