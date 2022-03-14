import React from "react";
import CardBody from "./body";
import CardHeader from "./header";
import CardFooter from "./footer";
import zelda from "../../../data/zelda";

const ProductCard = () => {
  return (
    <div className="container">
      <CardHeader name={zelda.platforms[0].name} platformLogos={zelda.platforms} />
      <CardBody
        cover={zelda.cover.url}
        screenshots={zelda.screenshots}
        genres={zelda.genres}
        summary={zelda.summary}
        firstReleaseDate={zelda.first_release_date}
      />
      <CardFooter slug={zelda.slug} />
    </div>
  );
};

export default ProductCard;
