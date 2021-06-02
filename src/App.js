import React, { useState } from "react";
import "./styles.css";
const zodiacDictionary = {
  "♈": "Aries",
  "♉": "Taurus",
  "♊": "Gemini",
  "♋": "Cancer",
  "♌": "Leo",
  "♍": "Virgo",
  "♎": "Libra",
  "♏": "scorpics",
  "♐": "sagittarius",
  "♑": "capricorn",
  "♒": "Aquarius",
  "♓": "pisces"
};
const zodiacSign = Object.keys(zodiacDictionary);

export default function App() {
  const [zodiac, setZodiac] = useState("");
  const [meaning, setMeaning] = useState("names will appear here..");
  function ChangeHandler(event) {
    const inputZodiac = event.target.value;
    setZodiac(inputZodiac);

    if (inputZodiac in zodiacDictionary) {
      setMeaning(zodiacDictionary[inputZodiac]);
    } else {
      setMeaning("failure to recognize this!!!");
    }
  }
  function zodiacClickHandler(inputZodiac) {
    setMeaning(zodiacDictionary[inputZodiac]);
  }
  return (
    <div className="App">
      <h1>Zodiac names</h1>
      <input
        onChange={ChangeHandler}
        value={zodiac}
        placeholder={"put an zodiac sign to know the name of it"}
        style={{
          padding: "1rem"
        }}
      />
      <h2> {zodiac} </h2>
      <h3> {meaning} </h3>
      {zodiacSign.map((zodiac) => (
        <span
          onClick={() => zodiacClickHandler(zodiac)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {""}
          {zodiac}
          {""}
        </span>
      ))}
    </div>
  );
}
