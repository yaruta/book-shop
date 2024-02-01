import { useState } from "react";
import { Outlet } from "react-router-dom";
import classes from "./RootLayout.module.css";
import Header from "../components/Layout/Header";
import CartProvider from "../store/CartProvider";
import ShopProvider from "../store/ShopProvider";
import Footer from "../components/Layout/Footer";
import CartModal from "../components/Cart/CartModal";

function RootLayout() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <ShopProvider>
      <CartProvider>
        <div className={classes.container}>
          <Header onShow={showCartHandler} />
          <main>
            {cartIsShown && (
              <CartModal
                onClose={hideCartHandler}
                onNavigate={hideCartHandler}
              />
            )}
            <Outlet />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </ShopProvider>
  );
}

export default RootLayout;
