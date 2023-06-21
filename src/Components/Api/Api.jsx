import React, { useState, useEffect } from "react";
import "./Api.scss";

export const Api = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log("Fehler beim Abrufen der Daten:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <div className="Api">
      {!isLoading ? (
        <div className="KatzenText">
          <h1>{data.fact}</h1>
        </div>
      ) : (
        <div className="CrazyCat">
          <img src="./src/Components/Api/cat-loading.gif" alt="Bild Katzenkopf" />
        </div>
      )}
      <div className="ClickCat">
      <button   className="CatBtn" onClick={handleButtonClick} type="button">Get New Facts from Cat</button>
      </div>
    </div>
  );
};
