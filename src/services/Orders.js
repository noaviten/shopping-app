import React, { Component ,createContext, useContext } from "react";

const OrdersContext = createContext();

export const OrdersConsumer = OrdersContext.Consumer;

export function useOrdersService() {
  return useContext(OrdersContext);
}

/*
interface OrderItem {
  id: number;
  total: number;
  date: string;
}
*/

let _id = 0;
const getId = () => _id++;
const createOrderItem = (total, date) => ({
  total,
  date,
  id: getId()
});

const ORDERS = [];

export class OrdersService extends Component {
    state = {
      orders: ORDERS
    };

    addOrderItem = (total, date) => {
        const order = createOrderItem(total, date);
        const newOrders = [order, ...this.state.orders];
        this.setState({ orders: newOrders });
    };

    render() {
        const addOrderItem = this.addOrderItem;
        const orders = this.state.orders;
    
        const ctx = {
            orders,
            addOrderItem
        };
    
        return (
          <OrdersContext.Provider value={ctx}>
            {this.props.children}
          </OrdersContext.Provider>
        );
      }
}