import { useContext } from "react";
import classes from "./Balance.module.css";
import CartContext from "../../../store/cart-context";

/**
 * This is a component for price in the checkout.
 */

const Balance = () => {
  const cartCtx = useContext(CartContext);
  const shippingPrice = 4.99;

  return (
    <article>
      <div className={classes["balance-line"]}>
        <span>Subtotal price</span>
        <span>{`€${cartCtx.totalPrice.toFixed(2).replace(".", ",")}`}</span>
      </div>
      <div className={classes["balance-line"]}>
        <span>Shipping</span>
        <span>{`€${shippingPrice.toFixed(2).replace(".", ",")}`}</span>
      </div>
      <div className={classes["balance-line"]}>
        <span>Total price</span>
        <span>{`€${(cartCtx.totalPrice + shippingPrice)
          .toFixed(2)
          .replace(".", ",")}`}</span>
      </div>
    </article>
  );
};

export default Balance;
