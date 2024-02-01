import { useContext } from "react";
import classes from "./HeaderSearchField.module.css";
import SearchIcon from "./SearchIcon";
import ShopContext from "../../store/shop-context";

/**
 * This is a component for a searc field to filter the shown items in the shop.
 */    
const HeaderSearchField = (props) => {
  const shopCtx = useContext(ShopContext);

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    shopCtx.findItems(event.target.searchField.value);
    event.target.searchField.value = null;
  };

  return (
    <form className={classes["search-field"]} onSubmit={searchSubmitHandler}>
      <input type="text" name="searchField" placeholder="Find" id="searchField"/>
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default HeaderSearchField;
