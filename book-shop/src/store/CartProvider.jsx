import { useReducer } from "react";
import CartContext from "./cart-context";


/**
 * This is a Cart Context Provider. Here we can add, remove items from the cart and clear the cart in the end.
 */  


let defaultCartState = {
  items: [],
  totalPrice: 0,
};

const storageItems = JSON.parse(localStorage.getItem("items"));
const storageTotalPrice = JSON.parse(localStorage.getItem("totalPrice"));
if(storageItems !== null) {
  defaultCartState = {
    items: storageItems,
    totalPrice: parseFloat(storageTotalPrice)
  };
}


const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    const updatedTotalPrice = state.totalPrice + action.item.price;
    if (existingItem) {
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = {
        ...existingItem,
        amount: existingItem.amount + 1,
      };
    } else {
      updatedItems = state.items.concat({ ...action.item, amount: 1 });
    }
    localStorage.setItem("items", JSON.stringify(updatedItems));
    localStorage.setItem("totalPrice", JSON.stringify(updatedTotalPrice));
    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const existingItem = state.items[existingItemIndex];
    const updatedTotalPrice = state.totalPrice - existingItem.price;
    let updatedItems;
    if (existingItem.amount > 1) {
      updatedItems = [...state.items];
      let updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => {
        return item.id !== action.id;
      });
    }
    localStorage.setItem("items", JSON.stringify(updatedItems));
    localStorage.setItem("totalPrice", JSON.stringify(updatedTotalPrice));

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }

  if(action.type === "CLEAR") {
    return {
      items: [], 
      totalPrice: 0
    }
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCart = (item) => {
    dispatchAction({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchAction({ type: "REMOVE", id: id });
  };

  const clearCart = () => {
    dispatchAction({type: "CLEAR"});
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    clearCart: clearCart
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
