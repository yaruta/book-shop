import { useReducer } from "react";
import ShopContext from "./shop-context";

/**
 * This is a Shop Context Provider. Here we can load items from the data bank, sort items and find items by title or author
 */ 

let DEFAULT_ITEMS = [];
const defaultShopState = {
  items: [...DEFAULT_ITEMS],
};

const shopReducer = (state, action) => {
  if (action.type === "LOAD") {
    DEFAULT_ITEMS = action.items;
    return {
      items: action.items
    };
  }
  if (action.type === "SORT") {
    let sortedItems;
    switch (action.genre) {
      case "Fiction":
        sortedItems = DEFAULT_ITEMS.filter((item) => item.genre === "Fiction");
        console.log(sortedItems);
        break;
      case "Nonfiction":
        sortedItems = DEFAULT_ITEMS.filter((item) => {
          return item.genre === "Nonfiction";
        });
        break;
      case "Kids":
        sortedItems = DEFAULT_ITEMS.filter((item) => {
          return item.genre === "Kids";
        });
        break;
      default:
        sortedItems = [...DEFAULT_ITEMS];
    }

    return {
      items: sortedItems,
    };
  }

  if (action.type === "FIND") {
    let sortedItems;
    if (action.searchWord !== "") {
      sortedItems = DEFAULT_ITEMS.filter((item) => {
        return (
          item.title.toUpperCase().includes(action.searchWord.toUpperCase()) ||
          item.author.toUpperCase().includes(action.searchWord.toUpperCase())
        );
      });
    } else {
      sortedItems = [...DEFAULT_ITEMS];
    }

    return {
      items: sortedItems,
    };
  }

};

const ShopProvider = (props) => {
  const [shopState, dispatchShopAction] = useReducer(
    shopReducer,
    defaultShopState
  );

  const loadItems = (items) => {
    dispatchShopAction({ type: "LOAD", items: items });
  };

  const sortItemsByGenre = (genre) => {
    dispatchShopAction({ type: "SORT", genre: genre });
  };

  const findItemsBySearchParameter = (searchWord) => {
    dispatchShopAction({ type: "FIND", searchWord: searchWord });
  };


  const shopContext = {
    items: shopState.items,
    loadItems: loadItems,
    sortItems: sortItemsByGenre,
    findItems: findItemsBySearchParameter,
  };

  return (
    <ShopContext.Provider value={shopContext}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
