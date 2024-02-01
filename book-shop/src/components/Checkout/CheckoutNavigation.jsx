import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "./CheckoutNavigation.module.css";

/**
 * This is a component for navigating the checkout with the steps behind and in front showing.
 */  
const CheckoutNavigation = () => {
  const [actualPath, setActualPath] = useState({});
  const {pathname} = useLocation();

  useEffect(()=> {
    if(pathname === "/checkout"){
      setActualPath({
        cartActive: true,
        userActive: false,
        paymentActive: false,
        overviewActive: false,
        completeActive: false
      });
    }
    else if (pathname === "/checkout/user-info") {
      setActualPath({
        cartActive: true,
        userActive: true,
        paymentActive: false,
        overviewActive: false,
        completeActive: false
      });
    } else if (pathname === "/checkout/payment") {
      setActualPath({
        cartActive: true,
        userActive: true,
        paymentActive: true,
        overviewActive: false,
        completeActive: false
      });
    } else if (pathname === "/checkout/order-overview") {
      setActualPath({
        cartActive: true,
        userActive: true,
        paymentActive: true,
        overviewActive: true,
        completeActive: false
      });
    } else if (pathname === "/checkout/confirmation") {
      setActualPath({
        cartActive: true,
        userActive: true,
        paymentActive: true,
        overviewActive: true,
        completeActive: true
      });
    }
  }, [pathname]);
  
  const classesActive = `${classes.active}`;

    return (
    <section className={classes["checkout-navigation"]}>
      <div>
        <div className={`${classes["cn-list-item"]} ${actualPath.cartActive ? classesActive : ""}`}>
          <span>1</span>
        </div>
        <div className={`${classes["progress-line"]} ${actualPath.userActive ? classesActive : ""}`}></div>
        <div className={`${classes["cn-list-item"]} ${actualPath.userActive ? classesActive : ""}`}>
          <span>2</span>
        </div>
        <div className={`${classes["progress-line"]} ${actualPath.paymentActive ? classesActive : ""}`}></div>
        <div className={`${classes["cn-list-item"]} ${actualPath.paymentActive ? classesActive : ""}`}>
          <span>3</span>
        </div>
        <div className={`${classes["progress-line"]} ${actualPath.overviewActive ? classesActive : ""}`}></div>
        <div className={`${classes["cn-list-item"]} ${actualPath.overviewActive ? classesActive : ""}`}>
          <span>4</span>
        </div>
        <div className={`${classes["progress-line"]} ${actualPath.completeActive ? classesActive : ""}`}></div>
        <div className={`${classes["cn-list-item"]} ${actualPath.completeActive ? classesActive : ""}`}>
          <span>5</span>
        </div>
      </div>
      <div className={classes["item-name"]}>
        <span>Warenkorb</span>
        <span>Kundendaten</span>
        <span>Bezahlung</span>
        <span>Übersicht</span>
        <span>Bestätigung</span>
      </div>
    </section>
  );
};

export default CheckoutNavigation;
