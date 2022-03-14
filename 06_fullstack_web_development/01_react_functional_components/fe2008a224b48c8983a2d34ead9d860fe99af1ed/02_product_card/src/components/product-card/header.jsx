import React from "react";
import { v4 as uuidv4 } from "uuid";
const CardHeader = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      {props.platformLogos.map((platform) => {
        if (platform.name === undefined) {
          return <img key={uuidv4()} src={platform} />;
        } else {
          return <img key={uuidv4()} src={platform.platform_logo.url} />;
        }
      })}
    </div>
  );
};

export default CardHeader;
