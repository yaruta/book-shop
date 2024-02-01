import { useContext } from "react";
import classes from "./CartFullscreen.module.css";
import CartContext from "../../../store/cart-context";
import CartItemFullscreen from "../Cart/CartItemFullscreen";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";

/**
 * This is a component for fullscreen cart(first page of the checkout process).
 */

const CartFullscreen = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <section className={classes.checkoutContent}>
      <article className={classes["cart-fullscreen"]}>
        <h2>YOUR CART</h2>
        <ul className={classes["cart-list"]}>
          {cartCtx.items.map((item) => {
            return <CartItemFullscreen key={item.id} item={item} />;
          })}
        </ul>
      </article>
      <CheckoutSummary />
    </section>
  );
};

export default CartFullscreen;
