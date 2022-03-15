import React, { useEffect, useState } from "react";
import platforms from "../../../tests/data/platforms";

const PlatformPage = (): JSX.Element => {
  type Platform = {
    name: string;
    id: string;
  };

  const [selectPlatform, setSelectPlatform] = useState([]);
  const [gamePerPlatform, setgamePerPlatform] = useState(false);

  useEffect(() => {
    fetch("http://videogame-api.fly.dev/platforms", { method: "get", headers: { Accept: "application/json" } })
      .then((data) => data.json())
      .then((element) => {
        const platformSelectHtml = element.platforms.map((platform: Platform) => {
          return platform.name;
        });
        setSelectPlatform(platformSelectHtml);
      });
  }, []);

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

  return (
    <div>
      <select>
        {selectPlatform.map((platform: Platform) => {
          return <option key={platform.id}>{platform.name}</option>;
        })}
      </select>
      <div>
        <ul className="list-group">
          <li className="list-group-item">Cras justo odio</li>
        </ul>
      </div>
    </div>
  );
};

export default PlatformPage;
