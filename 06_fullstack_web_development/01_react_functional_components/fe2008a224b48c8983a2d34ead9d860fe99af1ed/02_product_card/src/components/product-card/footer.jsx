import React from "react";

const CardFooter = (props) => {
  return (
    <div>
      <a href={"games/" + props.slug}>Link to the Game</a>
    </div>
  );
};

export default CardFooter;
