import { useState, useEffect } from "react";
import classes from './ScrollButton.module.css';
import ScrollIcon from "./ScrollIcon";

/**
 * This is a component for a scroll button of the main page.
 */    
const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const changeScrollButtonVisability = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", changeScrollButtonVisability);

    return () => {
      window.removeEventListener("scroll", changeScrollButtonVisability);
    };
  }, []);
  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button className={classes["scroll-button"]} onClick={scrollHandler}>
          <ScrollIcon />
        </button>
      )}
    </>
  );
};

export default ScrollButton;
