import classes from "./ShopSummary.module.css";
import image from "../../assets/headerImage2.JPG";

/**
 * This is a component to show some summary.
 */  

const ShopSummary = (props) => {
  return (
    <div className={classes.summary}>
      <div className={classes['summary-column']}>
        <h2>Some header sdajgak jsdf jgafhjsgshl ur.</h2>
        <p>
          Some main description dksfajewjhv jdhfaiheiwn haiwhndksjnjsn
          njewfdjsnfjew ejfnwiaenfawjgblj. Some main description dksfajewjhv jdhfaiheiwn haiwhndksjnjsn
          njewfdjsnfjew ejfnwiaenfawjgblj
        </p>
      </div>
      <div className={classes['summary-column']}>
        <img src={image} alt="A woman is reading book" />
      </div>
    </div>
  );
};

export default ShopSummary;
