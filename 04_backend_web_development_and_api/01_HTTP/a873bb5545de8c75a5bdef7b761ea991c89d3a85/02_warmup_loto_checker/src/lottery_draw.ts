import { Draw } from "./types";

export function lottery_draw(): Draw {
  const arrayReturn = [];
  for (let i = 0; i < 3; i++) {
    arrayReturn.push(Math.floor(Math.random() * 4));
  }
  return arrayReturn;
}
