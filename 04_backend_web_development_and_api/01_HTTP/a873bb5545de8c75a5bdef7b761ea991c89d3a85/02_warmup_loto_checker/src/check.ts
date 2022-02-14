import { lottery_draw } from "./lottery_draw";
import { Draw } from "./types";

export function checkIfIWon(ticket: Draw): void {
  // Code the function here
  const arrayLottery = lottery_draw();
  const arrayResult = [];
  for (let i = 0; i < 3; i++) {
    if (ticket[i] === arrayLottery[i]) {
      arrayResult.push(true);
    }
  }
  if (arrayResult.length === 3) {
    console.log("You won the lottery!");
  } else if (arrayResult.length < 3) {
    console.log("You lost...");
  }
}
