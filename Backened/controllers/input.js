import { calculateFitnessData } from "../helpers/BMIapi.js";
import { searchPokemonByHeightWeight } from "../helpers/apicall.js";
// import { PokemonImage } from "../helpers/getimage.js";
// import { searchPokemonByHeightWeight } from './../helpers/apicall';

export const input = async (req, res, next) => {
    console.log(req.body)
  const { height, weight, age, gender } = req.body;
  if (!height || !weight) {
    next(errorHandler(400, "All fields are required"));
  }
  try {
    let matchingPokemon = await searchPokemonByHeightWeight(height, weight);
    let bmiresult = await calculateFitnessData(age,weight,height,gender)
    const randomIndex = Math.floor(Math.random() * matchingPokemon.length);
    const randomPokemonname = matchingPokemon[randomIndex].name;
    const randomPokemoindex = matchingPokemon[randomIndex].index;
    console.log("Randomly chosen Pokémon:", randomPokemonname);
    console.log("Randomly chosen Pokémon:", randomPokemoindex);
    console.log(bmiresult);
  } catch (error) {
    next(error);
  }
};