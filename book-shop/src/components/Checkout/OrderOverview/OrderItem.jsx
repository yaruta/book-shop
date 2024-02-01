import classes from "./OrderItem.module.css";

/**
 * This is the component to display an order item in the order overview.
 */  

const OrderItem = (props) => {
  return (
    <li className={classes["order-item"]}>
      <img src={props.item.image} />
      <div className={classes['item-info']}>
        <div className={classes.title}>
          <span>{props.item.title}</span>
          <span className={classes.price}>{`${props.item.amount} x ${props.item.price
            .toFixed(2)
            .replace(".", ",")} €`}</span>
        </div>
        <span>{props.item.author}</span>
        <span>{props.item.genre}</span>
      </div>
    </li>
  );
};

export default OrderItem;
