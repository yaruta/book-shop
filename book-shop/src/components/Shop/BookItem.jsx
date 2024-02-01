import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./BookItem.module.css";
import Card from "../UI/Card";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

/**
 * This is a component for a card with a single item in the shop.
 */   

const BookItem = (props) => {
  const cartCtx = useContext(CartContext);
  const link = `/${props.id}`;

  const addItemToCart = () => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      price: props.price,
      genre: props.genre,
      image: props.image,
      author: props.author,
    });
  };

  return (
    <Card id={props.id} className={classes["shop-item"]}>
      <Link to={link}>
        <div>
          <img src={props.image} alt="book image" />
        </div>
        <div className={classes["book-info"]}>
          <h2>{props.title}</h2>
          <p>{props.author}</p>
        </div>
      </Link>
      <div className={classes["price-add-area"]}>
        <span>{`${props.price.toFixed(2).replace(".", ",")} €`}</span>
        <button type="button" onClick={addItemToCart}>
          <CartIcon />
        </button>
      </div>
    </Card>
  );
};

export default BookItem;
