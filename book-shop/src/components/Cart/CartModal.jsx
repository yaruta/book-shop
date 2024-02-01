import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./CartModal.module.css";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

/**
 * This is a modal window with a shopping cart. If there are items in the cart, you can go to the checkout page. If the cart is empty, you cannot go to the next page.
 */

const CartModal = (props) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const [cartIsEmpty, setCartIsEmpty] = useState(true);

  /**
   * The modal window is updated as soon as the total price in the cart context is updated. When usedEffect will check if the cart is empty.
   */
  useEffect(() => {
    if (cartCtx.totalPrice > 0) {
      setCartIsEmpty(false);
    } else {
      setCartIsEmpty(true);
    }
  }, [cartCtx.totalPrice]);

  const navigateHandler = () => {
    props.onNavigate();
    navigate("checkout");
  };

  return (
    <Modal onClose={props.onClose}>
      <section className={classes["cart-modal"]}>
        <div className={classes["cart-header"]}>
          <h2>YOUR CART</h2>
          <button onClick={props.onClose}>X</button>
        </div>
        <div className={classes.balance}>
          <span>Overall price</span>
          <span>{`${cartCtx.totalPrice.toFixed(2).replace(".", ",")} €`}</span>
          <button onClick={navigateHandler} disabled={cartIsEmpty}>
            Order
          </button>
        </div>
        <ul className={classes["cart-list"]}>
          {cartIsEmpty && <p>No items</p>}
          {cartCtx.items.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </ul>
      </section>
    </Modal>
  );
};

export default CartModal;
