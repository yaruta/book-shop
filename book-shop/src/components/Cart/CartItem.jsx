import { useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";
import BinIcon from "./BinIcon";

/**
 * This is a component for displaying an item in the shopping cart.
 */

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  /**
   * The method to remove the item from the cart context.
   */
  const removeItemFromCart = () => {
    cartCtx.removeItem(props.item.id);
  };

  return (
    <li className={classes["cart-item"]}>
      <img src={props.item.image} />
      <span className={classes.title}>{props.item.title}</span>
      <span>{props.item.author}</span>

      <div className={classes["genre-price-area"]}>
        <span>{props.item.genre}</span>
        <span>{`${props.item.amount} x ${props.item.price
          .toFixed(2)
          .replace(".", ",")} €`}</span>
      </div>
      <button type="button" onClick={removeItemFromCart}>
        <BinIcon />
        Remove product
      </button>
    </li>
  );
};

export default CartItem;
