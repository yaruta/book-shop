import { useContext } from "react";
import classes from "./CartItemFullscreen.module.css";
import CartContext from "../../../store/cart-context";
import BinIcon from "../../Cart/BinIcon";

/**
 * This is a component for displaying an item in the fullscreen shopping cart.
 */

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const removeItemFromCart = () => {
    cartCtx.removeItem(props.item.id);
  };

  return (
    <li className={classes["cart-item"]}>
      <img src={props.item.image} />
      <div className={classes['item-info']}>
        <div>
          <span className={classes.title}>{props.item.title}</span>
          <span>{props.item.author}</span>
          <span className={classes.genre}>{props.item.genre}</span>
        </div>
        <div>
          <span>{`${props.item.amount} x ${props.item.price
            .toFixed(2)
            .replace(".", ",")} €`}</span>
          <button type="button" onClick={removeItemFromCart}>
            <BinIcon />
            Remove product
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
