/*
import React from "react";

function GetImage() {
  return <img src={`${process.env.PUBLIC_URL}/face.png`} alt="Logo" />;
}
*/
import React from "react";
import Image from "./face.png";

function GetImage() {
  return <img src={Image} width="60px" height="75px" alt="Image" />;
}

export default GetImage;
