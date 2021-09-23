// rfc
import React, { useState } from "react";
// useState is a hook

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log(Text);
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handleClearClick = () => {
    console.log(Text);
    let clearText = "";
    setText(clearText);
  };
  const handleDownClick = () => {
    console.log(Text);
    let newText = Text.toLowerCase();
    setText(newText);
  };
  //   const handleItalicsClick = () => {
  //     console.log(Text);
  //     let italicsText = Text.fontcolor("green");
  //     setText(italicsText);
  //   };
  const handleOnChange = (event) => {
    console.log("text area was changed");
    setText(event.target.value);
  };
  const [Text, setText] = useState("enter text here");
  //[text,settext]-this array destructing learn this.always use this synrax inside a function.when we use calss based components we can directly use this.state but now ib function based componets we are using functyions so without masking class functions
  //   "enter text here is default value of text and if qwe want to update we can use the second one that is setText"
  return (
    <>
      <div>
        <h2>Enter text to analyze below</h2>
        <div className="mb-3">
          <label for="myBox" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            value={Text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          clear text area
        </button>

        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          convert to lowecase
        </button>

        {/* <button className="btn btn-primary mx-1 " onClick={handleItalicsClick}>
          italics
        </button> */}
        {/* bootstrap classes btn btn-primary  */}
      </div>
      <div className="container my-3">
        <h2>Your text summary comes here</h2>
        <p>
          {Text.split(" ").length} words and {Text.length} characters
        </p>
        <p>{0.008 * Text.split(" ").length} minutes time to read</p>
        <h2>preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
