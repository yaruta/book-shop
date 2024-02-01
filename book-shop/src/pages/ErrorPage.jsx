import { useRouteError } from "react-router-dom";
import classes from "./ErrorPage.module.css";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

function ErrorPage() {
  const error = useRouteError();

  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    message = "Error 404. Could not find resource of a page.";
  }

  return (
    <div className={classes.container}>
      <Header />
      <main>
        <p className={classes.errorPage}>{message}</p>
      </main>
      <Footer />
    </div>
  );
}

export default ErrorPage;
