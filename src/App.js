import React, { useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const [pixel, setPixel] = useState("");
  const [rem, setRem] = useState("");
  const [rootPixel, setRootPixel] = useState("16");

  const handleRootPixelChange = (e) => {
    setRootPixel(e.target.value);
  };

  const handlePixelChange = (e) => {
    const pxValue = e.target.value; // string type
    setPixel(pxValue);
    const resultRem = parseFloat(pxValue) / parseFloat(rootPixel);
    setRem(resultRem);
  };

  const handleRemChange = (e) => {
    const remValue = e.target.value; // string type
    setRem(remValue);
    const resultPx = parseFloat(remValue) * parseFloat(rootPixel);
    setPixel(resultPx);
  };

  const handleChangeCalc = (e) => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <h2 className="title">{toggle ? "rem to pixel" : "pixel to rem"}</h2>
      <h2 className="root-pixel">
        root pixel:{" "}
        <input type="text" value={rootPixel} onChange={handleRootPixelChange} />
      </h2>
      <div className="container">
        <div className="px-box">
          <h3>{toggle ? "Rem" : "Pixel"}</h3>
          <input
            type="text"
            name="px"
            value={isNaN(pixel) ? "" : pixel}
            onChange={toggle ? handleRemChange : handlePixelChange}
            placeholder="픽셀을 입력하세요."
          />
          <span className="px">px</span>
        </div>
        <div className="rem-box">
          <h3>{toggle ? "Pixel" : "Rem"}</h3>
          <input
            type="text"
            name="rem"
            value={isNaN(rem) ? "" : rem}
            onChange={toggle ? handlePixelChange : handleRemChange}
          />
          <span className="rem">rem</span>
        </div>
        <button className="change" onClick={handleChangeCalc}>
          바꿔서 계산하기
        </button>
      </div>
    </div>
  );
}

export default App;
