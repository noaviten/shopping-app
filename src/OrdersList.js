import React from "react";
import { OrderItem } from "./OrderItem";

export function OrdersList({ orders }) {
  return (
    <ul>
      {orders.map(order => (
        <OrderItem
          key={order.id}
          order={order}
        />
      ))}
    </ul>
  );
}
