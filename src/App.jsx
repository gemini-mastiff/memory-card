import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [continent, setContinent] = useState("europe");
  const [countryArr, setCountryArr] = useState([]);
  console.log(countryArr);

  const handleClick = (e) => {
    setContinent(e.target.value);
    console.log(e.target.value);
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
      <button value="africa" onClick={handleClick}>
        Africa
      </button>
      <button value="americas" onClick={handleClick}>
        Americas
      </button>
      <button value="asia" onClick={handleClick}>
        Asia
      </button>
      <button value="europe" onClick={handleClick}>
        Europe
      </button>
      <button value="oceania" onClick={handleClick}>
        Oceania
      </button>
    </>
  );
}

export default App;
