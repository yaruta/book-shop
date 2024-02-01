import classes from './CheckoutSummary.module.css';
import Balance from "./Balance";
import NavigationButtons from "./NavigationButtons";

/**
 * This is a component for collecting components for displaying price in total and navigations buttons to the next and previous page.
 */

const CheckoutSummary = (props) => {
  return (
    <section className={classes.checkoutSummary}>
      <Balance />
      <NavigationButtons onForm={props.onForm}/>
    </section>
  );
};

export default CheckoutSummary;
