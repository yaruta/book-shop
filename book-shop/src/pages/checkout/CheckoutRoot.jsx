import { Outlet } from "react-router-dom";
import CheckoutNavigation from "../../components/Checkout/CheckoutNavigation";


function CheckoutRoot() {
  return (
    <>
      <CheckoutNavigation />
      <Outlet />
    </>
  );
}

export default CheckoutRoot;
