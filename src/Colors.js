import { Routes, Route } from "react-router-dom";
import AddNewColor from "./components/pages/AddNewColor";
import HomePages from "./components/pages/HomePages";
import SingleColor from "./components/pages/SingleColor";
import { useState } from "react";
function Colors() {
  const [selectColor, setSelectColor] = useState([
    { colorName: "red", colorValue: "#FF000" },
    { colorName: "blue", colorValue: "#000ff" },
    { colorName: "green", colorValue: "#00ff00" },
  ]);
  return (
    <Routes>
      <Route path="/" element={<HomePages selectColor={selectColor} />} />
      <Route
        path="/colors/new"
        element={
          <AddNewColor
            selectColor={selectColor}
            setSelectColor={setSelectColor}
          />
        }
      />
      <Route path="/colors/:color" element={<SingleColor />} />
    </Routes>
  );
}
export default Colors;