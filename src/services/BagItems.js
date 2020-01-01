import React, { Component ,createContext, useContext } from "react";

const BagItemsContext = createContext();

export const BagItemsConsumer = BagItemsContext.Consumer;

export function useBagItemsService() {
  return useContext(BagItemsContext);
}

/*
interface BagItem {
  id: number;
  name: string;
  amount: number;
  price: number;
}
*/

let _id = 0;
const getId = () => _id++;
const createBagItem = (name, amount, price) => ({
  name,
  amount,
  price,
  id: getId()
});

const BAGITEMS = [
    createBagItem("Shirt", 1, 100),
    createBagItem("Pants", 2, 200),
    createBagItem("Bra", 1, 150)
];

export class BagItemsService extends Component {
    state = {
      bagItems: BAGITEMS
    };

    deleteBagItem = bagItemId => {
        const { bagItems } = this.state;
        const bagItemsAfterChange = bagItems.filter(bagItem => bagItem.id !== bagItemId);
        this.setState({
            bagItems: bagItemsAfterChange
        });
    };

    addBagItem = (name, amount, price) => {
        const bagItem = createBagItem(name, amount, price);
        const newBagItems = [bagItem, ...this.state.bagItems];
        this.setState({ bagItems: newBagItems });
    };

    deleteAllItems = () =>{
        this.setState({
        bagItems: []
    })};

    render() {
        const addBagItem = this.addBagItem;
        const bagItems = this.state.bagItems;
        const deleteBagItem = this.deleteBagItem;
        const deleteAllItems = this.deleteAllItems;
    
        const ctx = {
            bagItems,
            addBagItem,
            deleteBagItem,
            deleteAllItems
        };
    
        return (
          <BagItemsContext.Provider value={ctx}>
            {this.props.children}
          </BagItemsContext.Provider>
        );
      }
}