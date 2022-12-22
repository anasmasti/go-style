import React from "react";
import ImageCard from "../cards/ImageCard";
import RegularCard from "../cards/RegularCard";

const MainCard = ({ data, type }) => {
  if (type === "regular") return <RegularCard data />;
  if (type === "image") return <ImageCard data />;
  return;
};

export default MainCard;
