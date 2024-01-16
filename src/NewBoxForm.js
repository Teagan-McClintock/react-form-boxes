import React from "react";
import { v4 as uuid } from 'uuid';

/**Renders form to add a new box.
 *
 * Props: handleSubmit
 *
 * State: formValues
 *
 * BoxList -> NewBoxForm
 */


function NewBoxForm({ handleSubmit }) {
  const [formValues, setFormValues] = useState(
    {height: "", width: "", color: ""}
  );

  function handleFormChange(evt) {
    const { name, value } = evt.target;
    setFormValues(fValues => ({...fValues, [name]: value}));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="height">Height</label>
        <input id="height"
          name="height"
          value={formValues.height}
          onChange={handleFormChange}>
        </input>
        <label htmlFor="width">Width</label>
        <input id="width"
          name="width"
          value={formValues.width}
          onChange={handleFormChange}>
        </input>
        <label htmlFor="color">Background Color</label>
        <input id="color"
          name="color"
          value={formValues.color}
          onChange={handleFormChange}>
        </input>
      </form>
    </div>
  );
}

export default NewBoxForm;