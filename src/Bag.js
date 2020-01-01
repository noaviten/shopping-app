import React from "react";
import { PageSection } from "./appLayout";
import { useBagItemsService } from "./services/BagItems";
import { useOrdersService } from "./services/Orders";
import { BagItemAdder, Button } from "./BagItemAdder";
import { BagList } from "./BagList";

export function Bag() {
  const {
    addBagItem,
    bagItems,
    deleteBagItem,
    deleteAllItems
  } = useBagItemsService();

  const {
    addOrderItem
  } = useOrdersService();

  const total = bagItems.reduce( (acc, currItem)  =>  acc + (currItem.price * currItem.amount), 0);
  
  const clickOrderButt = () => { 
    const today = new Date();
    const date = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} 
                  ${today.getDate()}/${today.getMonth()+1}/${today.getUTCFullYear()}`;
    addOrderItem(total, date);
    deleteAllItems();
  }

  return (
    <PageSection heading="Bag">
      <BagItemAdder onAddBagItem={addBagItem} />
      <BagList bagItems={bagItems} onDelete={deleteBagItem} />
      <h4>Total: {total} $ </h4>
      { bagItems.length > 0 ? <Button onClick = {clickOrderButt}>Order</Button> 
                            : <h3>There are no items in the bag :(</h3>}
    </PageSection>
  );
}

export default Bag;