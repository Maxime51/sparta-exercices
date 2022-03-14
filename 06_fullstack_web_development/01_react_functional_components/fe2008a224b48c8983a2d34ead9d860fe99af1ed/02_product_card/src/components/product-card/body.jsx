import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CardBody = (props) => {
  const [screenshots, setScreen] = useState(false);
  //sconsole.log(props);
  function changeStateScreen() {
    if (screenshots === false) {
      return setScreen(props.screenshots.map((img) => <img key={uuidv4()} src={img.url} />));
    } else {
      setScreen(false);
    }
  }
  return (
    <div>
      <img src={props.cover} />
      <h3>{props.firstReleaseDate}</h3>
      {props.genres.map((genre) => {
        if (genre.name === undefined) {
          return <p key={uuidv4()}>{genre}</p>;
        } else {
          return <p key={uuidv4()}>{genre.name}</p>;
        }
      })}
      <h3>{props.summary}</h3>
      <button onClick={changeStateScreen}>Show screenshots</button>
      <div>{screenshots}</div>
    </div>
  );
};

export default CardBody;
