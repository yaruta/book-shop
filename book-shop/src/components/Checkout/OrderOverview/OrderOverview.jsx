import { useContext, useState } from "react";
import classes from "./OrderOverview.module.css";
import CartContext from "../../../store/cart-context";
import OrderItem from "./OrderItem";
import Card from "../../UI/Card";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";


/**
 * This is the component to display the order overview and to submit a data. An http request will be send to add order information to the data bank. No data encryption used.
 */  

const OrderOverview = () => {
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  const paymentInfo = JSON.parse(localStorage.getItem("payment"));
  const cartCtx = useContext(CartContext);
  const { items, totalPrice } = cartCtx;
  const shippingPrice = 4.99;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearLocalStorage = () => {
    localStorage.clear();
    cartCtx.clearCart();
  };

  const submitOrderHandler = async () => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-27f8d-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          orderId: Date.now(),
          user: userInfo,
          items: items,
          payment: paymentInfo,
          totalPrice: (totalPrice + shippingPrice).toFixed(2),
        }),
      }
    );
    setIsSubmitting(false);
    clearLocalStorage();
  };

  return (
    <section className={classes.checkoutContent}>
      {isSubmitting ? "Submitting" : ""}
      <article className={classes.overview}>
        <Card className={classes["user-info"]}>
          <div className={classes["shipping-address"]}>
            <h3>Shipping address:</h3>
            <span>{`${userInfo.firstName} ${userInfo.lastName}`}</span>
            <span>{`${userInfo.address.street} ${userInfo.address.houseNumber}`}</span>
            <span>{`${userInfo.address.postcode} ${userInfo.address.city}`}</span>
          </div>
          <div className={classes["payment-method"]}>
            <h3>Payment method:</h3>
            <span>{paymentInfo.type}</span>
            <span>{paymentInfo.type === "Paypal" ? paymentInfo.details : `${paymentInfo.details.slice(0,4)} **** **** ${paymentInfo.details.slice(12,15)}`}</span>
          </div>
        </Card>
        <Card className={classes["order-summary"]}>
          <h3>Order Summary</h3>
          <ul>
            {items.map((item) => {
              return <OrderItem key={item.id} item={item} />;
            })}
          </ul>
          <article className={classes["order-price"]}>
            <div>
              <span>Subtotal:</span>
              <span>{`€${totalPrice.toFixed(2).replace(".", ",")}`}</span>
            </div>
          </article>
        </Card>
      </article>
      <CheckoutSummary onForm={submitOrderHandler}/>
    </section>
  );
};

export default OrderOverview;
