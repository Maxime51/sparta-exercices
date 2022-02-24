import { Game } from "./types";

export function filterGameByPlatform(games: Game[], platform: string): Game[] {
  return games.filter((element) => element.platform === platform);
}
