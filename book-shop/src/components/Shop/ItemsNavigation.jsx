import { useContext, useState } from "react";
import classes from "./ItemsNavigation.module.css";
import ShopContext from "../../store/shop-context";

/**
 * This is a component to filter items shown in the shop by genre.
 */   

const ItemsNavigation = (props) => {
  const [defaultGenre, setDefaultGenre] = useState(true);
  const shopCtx = useContext(ShopContext);
  const sortItemsHandler = (event) => {
    shopCtx.sortItems(event.target.value);
    setDefaultGenre(false);
  };

  const removeFindItemsHandler = () => {
    shopCtx.findItems("");
    setDefaultGenre(true);
  };
  return (
    <div className={classes["items-navigation"]}>
      <button onClick={removeFindItemsHandler}>Remove filters</button>
      <div className={classes["genre-selction"]}>
        <label htmlFor="genre">Sort by genre: </label>
        <select id="genre" onChange={sortItemsHandler}>
          <option value="All" selected={defaultGenre && "selected"}>
            All
          </option>
          <option value="Fiction">Fiction</option>
          <option value="Nonfiction">Nonfiction</option>
          <option value="Kids">Kids</option>
        </select>
      </div>
    </div>
  );
};

export default ItemsNavigation;
