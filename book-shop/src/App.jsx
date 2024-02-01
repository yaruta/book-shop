import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDetailPage from "./pages/products/ProductDetailPage";
import CartInfoPage from "./pages/checkout/CartInfoPage";
import UserInfoPage from "./pages/checkout/UserInfoPage";
import PaymentPage from "./pages/checkout/PaymentPage";
import OrderOverviewPage from "./pages/checkout/OrderOverviewPage";
import CheckoutRoot from "./pages/checkout/CheckoutRoot";
import OrderConfirmationPage from './pages/checkout/OrderConfirmationPage';
import ErrorPage from "./pages/ErrorPage";

/**
 * This is main component with a router for the whole website.
 */   
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/:productId",
        element: <ProductDetailPage />,
      },

      {
        path: "/checkout",
        element: <CheckoutRoot />,
        children: [
          {
            path: "/checkout",
            element: <CartInfoPage />,
          },
          {
            path: "/checkout/user-info",
            element: <UserInfoPage />,
          },
          {
            path: "/checkout/payment",
            element: <PaymentPage />,
          },
          {
            path: "/checkout/order-overview",
            element: <OrderOverviewPage />,
          },
          {
            path: "/checkout/confirmation",
            element: <OrderConfirmationPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
