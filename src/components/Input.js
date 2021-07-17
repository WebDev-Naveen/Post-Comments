import React from "react";
import Button from "./Button";

function Input({
  placeholder,
  style,
  display,
  btn,
  setInput,
  setBtnVal,
  btnVal,
  val,
  setVal,
}) {
  const gifBtn = {
    width: "80%",
    height: "40px",
  };

  function handleSubmit() {
    setInput(val);
    setVal("");
  }
  function handleChange(e) {
    setVal(e.target.value);
  }
  function handleBtn() {
    setBtnVal(!btnVal);
  }
  return (
    <div className="input_container" style={{ display: display }}>
      <input
        type="text"
        value={val}
        placeholder={placeholder}
        style={style}
        onChange={handleChange}
      />
      {btn === "true" && (
        <>
          <Button
            gifBtn={gifBtn}
            name="Search Gif"
            style={style}
            handleSubmit={handleSubmit}
          />
          <Button
            gifBtn={gifBtn}
            name="Gif"
            style={style}
            handleSubmit={handleBtn}
          />
        </>
      )}
    </div>
  );
}

export default Input;
