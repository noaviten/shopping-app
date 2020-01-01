import React, { useState, useEffect } from "react";
import { PageSection } from "./appLayout";
import { OrdersList } from "./OrdersList";
import { useOrdersService } from "./services/Orders";
import { Redirect } from "react-router-dom";

export function MyOrders() {
  const {
    orders,
  } = useOrdersService();

  const [ttr, setTtr] = useState(3);
  useEffect(() => {
    if(orders.length === 0){
      const timer = setTimeout(() => {
        setTtr(ttr - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [ttr, orders.length]);

  if (ttr === 0) {
    return <Redirect to="/Bag" />;
  }

  return (
    <PageSection heading="My Orders">
      {orders.length === 0 ?
        <h3>Redirecting to bag page in {ttr}...</h3> :
        <OrdersList orders={orders}/>}
    </PageSection>
  );
}

export default MyOrders;