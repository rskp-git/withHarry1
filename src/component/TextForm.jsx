import React, { useState } from "react";

export const TextForm = (props) => {
  let [text, setText] = useState("Enter your Text here");

  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  return (
    <> 
      <div className=" container">
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h1>
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "black" : "white",
          }}
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleOnchange}
          rows="8"
        ></textarea>
        <button className="btn btn-success my-3" onClick={handleClick}>
          Convert to UpperCase
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} word and {text.length} letters
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};
