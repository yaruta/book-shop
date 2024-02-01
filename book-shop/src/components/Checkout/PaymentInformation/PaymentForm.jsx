import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./PaymentForm.module.css";
import CardDetailsForm from "./CardDetailsForm";
import PaypalDetailsForm from "./PaypalDetailsForm";

/**
 * This is a component to collect type and details of the payment with no security.
 */

const PaymentForm = () => {
  const navigate = useNavigate();
  const [paymentType, setPaymentType] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);

  const paymentTypeHandler = (event) => {
    setPaymentType(event.target.value);
  };

  const paymentDetailsHandler = (event) => {
    setPaymentDetails(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (paymentDetails === null) {
      return;
    }
    localStorage.setItem(
      "payment",
      JSON.stringify({
        type: paymentType,
        details: paymentDetails,
      })
    );

    navigate("/checkout/order-overview");
  };

  return (
    <article className={classes["payment-section"]}>
      <form>
        <h2>BEZAHLUNGSART:</h2>
        <p>
          This page is just a simple form to imitate website with no real
          process of payment or sequrity. The payment form need to be added.
        </p>
        <div className={classes["payment-type"]}>
          <input
            type="radio"
            name="payment-type"
            value="Paypal"
            onChange={paymentTypeHandler}
            required
          />
          <label htmlFor="paypal">Paypal</label>
          <input
            type="radio"
            name="payment-type"
            value="Card"
            onChange={paymentTypeHandler}
          />
          <label htmlFor="card">Card</label>
        </div>
      </form>

      {paymentType ? (
        paymentType === "Paypal" ? (
          <PaypalDetailsForm
            onChange={paymentDetailsHandler}
            onSubmit={submitHandler}
          />
        ) : (
          <CardDetailsForm
            onChange={paymentDetailsHandler}
            onSubmit={submitHandler}
          />
        )
      ) : (
        ""
      )}
    </article>
  );
};

export default PaymentForm;
