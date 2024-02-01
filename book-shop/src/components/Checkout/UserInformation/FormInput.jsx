import { useState } from "react";
import classes from "./FormInput.module.css";

/**
 * This is a component for a single field in the user form.
 */

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, id, onChange, errorMessage, ...inputProps } = props;

  /**
   * This method updates whether the user clicked in the field and then out of the field 
   * (to show an error in the field only if the user did not enter the correct information, not immediately when the form is loaded).
   */
  
  const handleFocus = (event) => {
    setFocused(true);
  };

  return (
    <div className={classes.formInput}>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
