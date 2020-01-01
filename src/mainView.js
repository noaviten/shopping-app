import React from "react";
import { Route, Switch } from "react-router-dom";
import Bag from "./Bag";
import Home from "./Home";
import MyOrders from "./MyOrders";
import PageNotFound from "./PageNotFound";

export function MainView() {
  return (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Bag">
          <Bag />
        </Route>
        <Route path="/MyOrders">
          <MyOrders />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
  );
}
