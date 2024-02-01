import { Link } from "react-router-dom";
import classes from "./OrderConfirmation.module.css";
import Card from "../../UI/Card";

/**
 * This is the component to display the order confirmation.
 */ 

const OrderConfirmation = () => {
  return (
    <section className={classes.checkoutContent}>
      <Card className={classes.confirmation}>
        <h2>Vielen Dank für Ihre Bestellung!</h2>
        <p>{`Ihre Bestellung wurde aufgegeben und wird nun bearbeitet.`}</p>
        <Link to="/">Zurück zum Shop</Link>
      </Card>
    </section>
  );
};

export default OrderConfirmation;
