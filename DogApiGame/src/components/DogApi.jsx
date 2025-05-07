import React, { useState, useEffect } from "react";
import "./DogApi.css";
function DogApi() {
  const [dogImage, setDogImage] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    fetchDog();
  }, []);

  const fetchDog = async () => {
    setResult("");
    setGuess("");
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    const imageUrl = data.message;

    const match = imageUrl.match(/breeds\/([^/]+)\//);
    const breedName = match ? match[1].replace("-", " ") : "unknown";

    setDogImage(imageUrl);
    setDogBreed(breedName.toLowerCase());
  };

  const checkGuess = () => {
    const userGuess = guess.trim().toLowerCase();
    const normalize = (str) => str.split(" ").sort().join(" ").toLowerCase();

    if (normalize(userGuess) === normalize(dogBreed)) {
      setResult("✅ Correct!");
    } else {
      setResult(`❌ It was "${dogBreed}"`);
    }
  };

  return (
    <div className="dog-container">
      <h2>Guess the Dog Breed</h2>
      {dogImage && <img src={dogImage} alt="Dog" className="dog-image" />}
      <div>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Type your guess"
          className="dog-input"
        />
        <button onClick={checkGuess} className="dog-button">
          Guess
        </button>
        <button onClick={fetchDog} className="dog-button new-dog">
          New Dog
        </button>
      </div>
      {result && <p className="dog-result">{result}</p>}
    </div>
  );
}

export default DogApi;
