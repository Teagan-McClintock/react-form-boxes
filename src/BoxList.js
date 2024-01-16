import React from "react";
import { v4 as uuid } from 'uuid';
import { Box } from './Box';
import { NewBoxForm } from './NewBoxForm';

/** Displays list of boxes with buttons to remove them. Also renders form
 * to add a new box.
 *
 * Props: None
 *
 * State: boxes
 *  - [{key, color, height, width}, ...]
 *
 * App -> BoxList -> NewBoxForm, Box
 */


function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addNewBox(box){
    const newBox = {...box, key: uuid()};
    setBoxes(boxes => ([...boxes, newBox]));
  }

  function deleteBox(evt){
    setBoxes(boxes => boxes.filter(box => box.key !== evt.target.key));
  }

  function renderBoxes() {
    return (<ul>
      {boxes.map(box =>
        <Box key={box.key} color={box.color} height={box.height} width={box.width}
          handleClick={deleteBox}
        />
      )}
    </ul>)
  }

  return(
    <div>
      <Box handleSubmit={addNewBox} />
      <Box />
      {renderBoxes}
    </div>
  );

}