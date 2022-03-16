import React, { useEffect, useState } from "react";
import { target } from "../../../webpack.config";

const PlatformPage = (): JSX.Element => {
  type Platform = {
    name: string;
    id: string;
  };

  type Game = {
    name: string;
    id: string;
  };

  const [selectPlatform, setSelectPlatform] = useState([]);
  const [platFormSelected, setplatFormSelected] = useState("0124f86d-b875-8d9e-8c78-95c7fc47de08");
  const [gamePerPlatform, setgamePerPlatform] = useState([]);

  useEffect(() => {
    fetch("http://videogame-api.fly.dev/platforms", { method: "get", headers: { Accept: "application/json" } })
      .then((data) => data.json())
      .then((element) => {
        const platformSelectHtml = element.platforms.map((platform: Platform) => {
          return { id: platform.id, name: platform.name };
        });
        setSelectPlatform(platformSelectHtml);
      });
  }, []);

  useEffect(() => {
    fetch(`http://videogame-api.fly.dev/games/platforms/${platFormSelected}`, {
      method: "get",
      headers: { Accept: "application/json" },
    })
      .then((data) => data.json())
      .then((element) => {
        const GamePerPlatformSelectHtml = element.games.map((game: Game) => {
          return { id: game.id, name: game.name };
        });
        setgamePerPlatform(GamePerPlatformSelectHtml);
      });
  }, [platFormSelected]);

  function getValueOptionSelected(event: any) {
    setplatFormSelected(event.target.value);
  }

  return (
    <div>
      <select id="selectPlatform" onChange={getValueOptionSelected}>
        {selectPlatform.map((platform: Platform) => {
          return (
            <option value={platform.id} key={platform.id}>
              {platform.name}
            </option>
          );
        })}
      </select>
      <div>
        <ul className="list-group">
          {gamePerPlatform.map((game: Game) => {
            return (
              <li className="list-group-item listGamecd" value={game.id} key={game.id}>
                {game.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PlatformPage;
