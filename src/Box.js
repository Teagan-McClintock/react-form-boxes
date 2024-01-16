import React from "react";

/** Render a colored div with a background color, width, and height based on the
 * props passed to it
 *
 * Props: color, width, height
 *
 * State: none
 *
 * BoxList -> Box*/

function Box({ color, width, height }) {
  const myStyle = {
    "background-color": color,
    "width": width,
    "height": height
  }

  function removeBox() {

  }

  return (
  <div>
    <div style={ myStyle }>
    </div>
    <button onClick={removeBox}>Remove the Box!</button>
  </div>
  )

}