import React, { useState, initialState } from "react";
import { v4 as uuid } from 'uuid';

/**Renders form to add a new box.
 *
 * Props: handleSubmit
 *
 * State: formValues
 *
 * BoxList -> NewBoxForm
 */


function NewBoxForm({ addBox }) {
  const [formValues, setFormValues] = useState(
    {height: "", width: "", color: ""}
  );

  function handleFormChange(evt) {
    const { name, value } = evt.target;
    setFormValues(fValues => ({...fValues, [name]: value}));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formValues);
    // setFormValues(initialState);    // <--- (initialState is not a thing)
    setFormValues({height: "", width: "", color: ""});
  }

    // TODO: ids like "height", "width", etc are not specific enough
  return (
    <div className="NewBoxForm">
      <form onSubmit={handleSubmit}>
        <p>
        <label htmlFor="height">Height </label>
        <input id="height"
          name="height"
          value={formValues.height}
          onChange={handleFormChange}>
        </input>
        </p><p>
        <label htmlFor="width">Width </label>
        <input id="width"
          name="width"
          value={formValues.width}
          onChange={handleFormChange}>
        </input>
        </p><p>
        <label htmlFor="color">Background Color </label>
        <input id="color"
          name="color"
          value={formValues.color}
          onChange={handleFormChange}>
        </input>
        </p>
        <button>
          Add a new box!
        </button>
      </form>
    </div>
  );
}

export default NewBoxForm;