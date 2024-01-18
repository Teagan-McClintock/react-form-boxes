import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

/** Displays list of boxes with buttons to remove them. Also renders form
 * to add a new box.
 *
 * Props: None
 *
 * State: boxes
 *  - [{id, color, height, width}, ...]
 *
 * App -> BoxList -> NewBoxForm, Box
 */


function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addNewBox(box){
    const newBox = {...box, id: uuid()};
    setBoxes(boxes => ([...boxes, newBox]));
  }

  function deleteBox(evt){
    setBoxes(boxes => boxes.filter(box => box.id !== evt.target.id));
  }

  function renderBoxes() {
    return (<ul>
      {boxes.map(box =>
        <Box id={box.id} color={box.color} height={box.height} width={box.width}
          handleClick={deleteBox}
        />
      )}
    </ul>)
  }

  return(
    <div className="BoxList">
      <NewBoxForm addBox={addNewBox} />
      {renderBoxes()}
    </div>
  );

}

export default BoxList;