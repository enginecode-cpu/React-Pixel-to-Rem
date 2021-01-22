import React, { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const [pixel, setPixel] = useState("");
  const [rem, setRem] = useState("");
  const [rootPixel, setRootPixel] = useState("16");

  const handleRootPixelChange = useCallback((e) => {
    setRootPixel(e.target.value);
  }, []);

  const handlePixelChange = useCallback(
    (e) => {
      const pxValue = e.target.value; // string type
      setPixel(pxValue);
      const resultRem = parseFloat(pxValue) / parseFloat(rootPixel);
      setRem(resultRem);
    },
    [rootPixel]
  );

  const handleRemChange = useCallback(
    (e) => {
      const remValue = e.target.value; // string type
      setRem(remValue);
      const resultPx = parseFloat(remValue) * parseFloat(rootPixel);
      setPixel(resultPx);
    },
    [rootPixel]
  );

  const handleChangeCalc = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  const pixelInputValue = toggle
    ? isNaN(rem)
      ? ""
      : rem
    : isNaN(pixel)
    ? ""
    : pixel;
  const remInputValue = toggle
    ? isNaN(pixel)
      ? ""
      : pixel
    : isNaN(rem)
    ? ""
    : rem;

  return (
    <div className="App">
      <h2 className="title">{toggle ? "Rem to Pixel" : "Pixel to Rem"}</h2>
      <h2 className="root-pixel">
        root pixel:{" "}
        <input type="text" value={rootPixel} onChange={handleRootPixelChange} />
      </h2>
      <div className="container">
        <div className={toggle ? "rem-box" : "px-box"}>
          <h3>{toggle ? "Rem" : "Pixel"}</h3>
          <input
            type="text"
            value={pixelInputValue}
            onChange={toggle ? handleRemChange : handlePixelChange}
            placeholder={toggle ? "" : "픽셀을 입력하세요."}
          />
          <span className={toggle ? "rem" : "px"}>{toggle ? "rem" : "px"}</span>
        </div>
        <div className={toggle ? "px-box" : "rem-box"}>
          <h3>{toggle ? "Pixel" : "Rem"}</h3>
          <input
            type="text"
            value={remInputValue}
            onChange={toggle ? handlePixelChange : handleRemChange}
          />
          <span className={toggle ? "px" : "rem"}>{toggle ? "px" : "rem"}</span>
        </div>
      </div>
      <div className="btn">
        <button className="change" onClick={handleChangeCalc}>
          {toggle ? "Pixel to Rem" : "Rem to Pixel"}
        </button>
      </div>
    </div>
  );
}

export default App;
