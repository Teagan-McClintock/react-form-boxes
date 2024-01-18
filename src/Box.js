import React from "react";

/** Render a colored div with a background color, width, and height based on the
 * props passed to it
 *
 * Props: id, color, width, height, handleClick
 *
 * State: none
 *
 * BoxList -> Box*/

function Box({ id, color, width, height, handleClick }) {
  const myStyle = {
    "backgroundColor": color,
    "width": `${width}px`,
    "height": `${height}px`
  }

  return (
  <div className="Box">
    <div style={ myStyle }>
    </div>
    <button onClick={handleClick} id={id}>Remove the Box!</button>
  </div>
  )

}


export default Box;