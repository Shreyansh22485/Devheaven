import React from 'react';
import './Result.css';

function Result() {
  const pokemonImageSrc = '';
  const bmi = 'Your BMI';
  const bmiStatus = 'Your BMI Status';
  const exercisesSuggested = 'Exercises Suggested for You';

  return (
    <div className="component-container">
      <div className="content-container ">
        <h2>You are like a:</h2>
        <img src={pokemonImageSrc} alt="Your Pokémon" className="pokemon-image" />
        <label className="bmi label">BMI: {bmi}</label>
        <label className="bmi-status label">BMI Status: {bmiStatus}</label>
        <label className="exercises-suggested label">Exercises Suggested: {exercisesSuggested}</label>
      </div>
    </div>
  );
}

export default Result;