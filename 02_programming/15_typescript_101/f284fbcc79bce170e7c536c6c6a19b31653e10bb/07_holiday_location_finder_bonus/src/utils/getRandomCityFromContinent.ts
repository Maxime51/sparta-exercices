import { cities } from "../data/data";

function getRandomCityFromContinent(keyboard: string) :void{
  const random: number = Math.floor(Math.random() * (4 - 0)) + 0;
console.log(`You chose ${keyboard}. I think you really should go spend some time in ${(cities[keyboard])[random]}.`);
  }
  export {getRandomCityFromContinent};
