import React from "react";

import { Box } from './Box';

/** Displays list of boxes with buttons to remove them. Also renders form
 * to add a new box.
 *
 * Props: None
 *
 * State: boxes
 *  - [{color, height, width}, ...]
 *
 * App -> BoxList -> NewBoxForm, Box
 */


function BoxList() {
  return(
    <div>
      <Box />
      <Box />
    </div>
  );

}