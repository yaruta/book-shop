import AvailableItems from "./AvailableItems";
import ItemsNavigation from "./ItemsNavigation";
import ShopSummary from "./ShopSummary";


/**
 * This is a component to collect everything shown in the shop
 */   

const Shop = () => {

  return (
    <>
      <ShopSummary />
      <ItemsNavigation/>
      <AvailableItems/>
    </>
  );
};

export default Shop;
