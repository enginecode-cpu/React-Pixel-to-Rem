import React, { useState } from "react";
import "./App.css";

function App() {
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

  return (
    <div className="App">
      <h2 className="title">pixel to rem</h2>
      <h2 className="root-pixel">
        root pixel:{" "}
        <input type="text" value={rootPixel} onChange={handleRootPixelChange} />
      </h2>
      <div className="container">
        <div className="px-box">
          <h3>Pixel</h3>
          <input
            type="text"
            name="px"
            value={isNaN(pixel) ? "" : pixel}
            onChange={handlePixelChange}
            placeholder="픽셀을 입력하세요."
          />
          <span className="px">px</span>
        </div>
        <div className="rem-box">
          <h3>Rem</h3>
          <input
            type="text"
            name="rem"
            value={isNaN(rem) ? "" : rem}
            onChange={handleRemChange}
          />
          <span className="rem">rem</span>
        </div>
      </div>
    </div>
  );
}

export default App;
