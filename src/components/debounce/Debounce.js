import React, { useState } from "react";

function Debounce() {
  const [debouncedText, setDebouncedText] = useState("");
  const [catFact, setCatFact] = useState("");

  async function handleInput(event) {
    const catFact = await fetch("https://catfact.ninja/fact").then((response) =>
      response.json()
    );

    setDebouncedText(event.target.value);
    setCatFact(catFact.fact);
  }

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  return (
    <>
      <div>
        <label htmlFor="debounce-text-input"> Debounce Text: </label>
        <input
          type="text"
          id="debounce-text-input"
          onChange={debounce(handleInput, 2000)}
        />
      </div>

      <br />
      <br />

      <div>
        <h1>{debouncedText}</h1>
        <h2>{catFact}</h2>
      </div>
    </>
  );
}

export default Debounce;
