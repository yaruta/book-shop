import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import HeaderCartButton from "./HeaderCartButton";
import HeaderSearchField from "./HeaderSearchField";
import ScrollButton from "./ScrollButton";

/**
 * This is a component for a header.
 */   
const Header = (props) => {
  const {pathname} = useLocation();
  let cartButton = <HeaderCartButton onShow={props.onShow} />;
  if(pathname.includes("/checkout")){
    cartButton = <HeaderCartButton/>;
  }

  return (
    <>
      <header className={classes["main-header"]}>
        <Link className={classes.logo} to="/">
          <img src={logo} alt="book-shop-logo" />
          <h2>BookShop</h2>
        </Link>
        <div className={classes["search-cart-area"]}>
          <HeaderSearchField />
          {cartButton}
        </div>
      </header>
      <ScrollButton />
    </>
  );
};

export default Header;
