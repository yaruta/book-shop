import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from './NavigationButtons.module.css';

/**
 * This is a component for navigations buttons to the next and previous page fro the whole checkout process.
 */ 

const NavigationButtons = (props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigatePreviousHandler = () => {
    if (pathname === "/checkout") {
      navigate("/");
    } else if (pathname === "/checkout/user-info") {
      navigate("/checkout");
    } else if (pathname === "/checkout/payment") {
      navigate("/checkout/user-info");
    } else if (pathname === "/checkout/order-overview") {
      navigate("/checkout/payment");
    }
  };

  const navigateHandler = () => {
    if (pathname === "/checkout") {
      navigate("/checkout/user-info");
    } else if (pathname === "/checkout/order-overview") {
      props.onForm();
      navigate("/checkout/confirmation");
    }
  };

  return (
    <article className={classes['navigation-buttons']}>
      <button
        className={classes["button-typ1"]}
        onClick={navigateHandler}
        type="submit"
        form={pathname === "/checkout/user-info" ? "userForm" : pathname === "/checkout/payment" ? "payment" : ""}
      >
        {pathname === "/checkout/order-overview" ? "Confirm" : "Next"}
      </button>
      <button
        className={classes["button-typ2"]}
        onClick={navigatePreviousHandler}
      >
        Previous
      </button>
      <Link to="/">Continue shopping</Link>
    </article>
  );
};

export default NavigationButtons;
