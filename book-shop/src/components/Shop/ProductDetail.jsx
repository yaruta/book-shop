import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./ProductDetail.module.css";
import ShopContext from "../../store/shop-context";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

/**
 * This is a component to show item details
 */   

const ProductDetail = () => {
  const params = useParams();
  const shopCtx = useContext(ShopContext);
  const cartCtx = useContext(CartContext);
  const productIndex = shopCtx.items.findIndex((item) => {
    return item.id === params.productId;
  });
  const product = shopCtx.items[productIndex];

  const addItemToCart = () => {
    cartCtx.addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      genre: product.genre,
      image: product.image,
      author: product.author,
    });
  };

  let linkText = "< Zurück zum Shop";

  return (
    <section className={classes["product-detail-section"]}>
      <Link to="/">{linkText}</Link>
      <article>
        <img src={product.image} />
        <div className={classes["item-info"]}>
          <h2 className={classes.title}>
            <span>{product.title}</span>
            <span>{`${product.price.toFixed(2).replace(".", ",")} €`}</span>
          </h2>

          <span>{product.author}</span>
          <span className={classes.genre}>{product.genre}</span>
          <p>{product.description}</p>
          <button type="button" onClick={addItemToCart} className={classes["add-item-button"]}>
            <CartIcon />
            <span>IN DEN WARENKORB</span>
          </button>
        </div>
      </article>
    </section>
  );
};

export default ProductDetail;
