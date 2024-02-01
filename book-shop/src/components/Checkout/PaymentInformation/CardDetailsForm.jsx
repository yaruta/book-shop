import { useState } from "react";
import classes from "./CardDetailsForm.module.css";

/**
 * This is the component to collect card information of the user. No data encryption used.
 */  
const CardDetailsForm = (props) => {
  const [blured, setBlured] = useState(false);
  const blurHandler = () => {
    setBlured(true);
  };

  return (
    <form className={classes.card} onSubmit={props.onSubmit} id="payment" name="payment">
      <h3>Card Information</h3>

      <input
        type="text"
        id="card-number"
        placeholder="Card Number"
        onChange={props.onChange}
        pattern="^[0-9]{16}$"
        onBlur={blurHandler}
        blured={blured.toString()}
        required
      />

      <input
        type="text"
        id="cvv"
        placeholder="CVV"
        pattern="^[0-9]{3}$"
        onBlur={blurHandler}
        blured={blured.toString()}
        required
      />
      <input
        type="text"
        id="card-date"
        placeholder="MM/YY"
        pattern="^((0?[1-9])|(1[0-2]|\d))\/(0(?!0)\d|[1-9]\d)"
        onBlur={blurHandler}
        blured={blured.toString()}
        required
      />
      <span>Bitte geben Sie gültige Kartendaten ein.</span>
    </form>
  );
};

export default CardDetailsForm;
