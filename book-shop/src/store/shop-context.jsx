import { createContext } from "react";

const ShopContext = createContext({
    items: [],
    loadItems: (items) => {},
    sortItems: (genre) => {},
    findItems: (searchWord) => {},
});

export default ShopContext;