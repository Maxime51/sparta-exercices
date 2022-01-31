import { Interface } from "readline";
import { continents } from "./data/data";
import {sanitizeUserInput} from "./utils/format";
import { getRandomCityFromContinent } from "./utils/getRandomCityFromContinent";

function holidayLocationFinder(reader: Interface) :void{
  // Write your code here
  console.log("***Welcome to HOLIDAY LOCATION FINDER***");
  continents.forEach((element) => console.log(element));
  reader.question("Please input your choice: /n >",response => {
    const sentenceFormat: string = sanitizeUserInput(response);
    getRandomCityFromContinent(sentenceFormat);
  });
  reader.close();
}

// Leave the line below for tests to work properly.
export { holidayLocationFinder };
