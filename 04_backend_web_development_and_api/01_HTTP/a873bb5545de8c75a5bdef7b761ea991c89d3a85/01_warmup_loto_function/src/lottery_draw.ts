type Draw = number[];

export function lottery_draw(): Draw {
  const tabReturn = [];
  for (let i = 0; i < 6; i++) {
    tabReturn.push(Math.floor(Math.random() * (101 - 0) + 0));
  }
  return tabReturn;
}
