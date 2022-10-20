import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const SingleColor = ({ selectColor }) => {
  const { color } = useParams();
  const navigate = useNavigate();
  const colorNew = selectColor.filter((item) => item.colorName === color)[0];
  console.log(colorNew);
  return (
    <div
      style={{ backgroundColor: `${colorNew && colorNew.colorValue}` }}
      className="flex justify-center items-center h-screen"
    >
      <div className="text-[3rem] text-center text-white">
        <p>THIS IS {colorNew && colorNew.colorName.toUpperCase()}</p>
        <p className="my-[10rem]">ISNT IT BEAUTIFUL?</p>
        <p className="underline" onClick={() => navigate("/")}>
          GO BACK
        </p>
      </div>
    </div>
  );
};
export default SingleColor;