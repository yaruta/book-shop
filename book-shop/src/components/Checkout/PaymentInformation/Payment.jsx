import classes from "./Payment.module.css";
import PaymentForm from "./PaymentForm";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";

const Payment = () => {
  return (
    <section className={classes.checkoutContent}>
      <PaymentForm />
      <CheckoutSummary />
    </section>
  );
};

export default Payment;
