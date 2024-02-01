import { useContext, useEffect, useState } from "react";
import classes from "./AvailableItems.module.css";
import ShopContext from "../../store/shop-context";
import BookItem from "./BookItem";

/**
 * This is a component to get all available items from the data bank and show them in the page.
 */  

const AvailableItems = (props) => {
  const shopCtx = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://react-http-27f8d-default-rtdb.firebaseio.com/shopItems.json"
      );
      if (!response.ok) {
        throw new Error("There is no items!");
      }
      const responseData = await response.json();
      let loadedItems = [];
      for (const key in responseData) {
        loadedItems.push({
          id: key,
          title: responseData[key].title,
          image: responseData[key].image,
          author: responseData[key].author,
          price: responseData[key].price,
          description: responseData[key].description,
          genre: responseData[key].genre,
        });
      }
      shopCtx.loadItems(loadedItems);
      setIsLoading(false);
    };
    fetchItems().catch((error) => {
      setIsLoading(false);
      console.log(error.message);
    });
  }, []);

  return (
    <ul className={classes["shop-list"]}>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        shopCtx.items.map((item) => {
          return (
              <BookItem
                id={item.id}
                key={item.id}
                image={item.image}
                title={item.title}
                author={item.author}
                price={item.price}
                description={item.description}
                genre={item.genre}
              />
          );
        })}
    </ul>
  );
};

export default AvailableItems;
