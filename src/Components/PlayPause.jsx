// Write Code here
import { useState } from "react";

function Button({ text, btntext }) {
  let [statetext, updatestatetext] = useState("The state is paused");
  let [statebtn, updatestatebtn] = useState("paused");

  let playpause = () => {
    updatestatetext("The state is playing");
    updatestatebtn("playing");
  };

  return (
    <>
      <h1>{statetext}</h1>
      <button onClick={playpause}>{statebtn}</button>
    </>
  );
}

export default Button;
