import {useState} from 'react';
import classes from './PaypalDetailsForm.module.css';

/**
 * This is the component to collect paypal information of the user. No data encryption used.
 */  

const PaypalDetailsForm = (props) => {
  const [blured, setBlured] = useState(false);
  const blurHandler = () => {
    setBlured(true);
  };
  
  return (
    <form className={classes.paypal} onSubmit={props.onSubmit} id="payment" name="payment">
      <h3>Paypal infomation</h3>
      <input
        type="email"
        id="email"
        placeholder="E-Mail"
        onChange={props.onChange}
        onBlur={blurHandler}
        blured={blured.toString()}
        required
      />
      <span>Bitte geben Sie eine gültige E-Mail ein.</span>
    </form>
  );
};

export default PaypalDetailsForm;
