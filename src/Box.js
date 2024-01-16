import React from "react";

/** Render a colored div with a background color, width, and height based on the
 * props passed to it
 *
 * Props: key, color, width, height, handleClick
 *
 * State: none
 *
 * BoxList -> Box*/

function Box({ key, color, width, height, handleClick }) {
  const myStyle = {
    "background-color": color,
    "width": width,
    "height": height
  }

  return (
  <div key={key}>
    <div style={ myStyle }>
    </div>
    <button onClick={handleClick}>Remove the Box!</button>
  </div>
  )

}


export default Box;