import classes from './Card.module.css';

/**
 * This is a wrapping component for the item
 */  

const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;