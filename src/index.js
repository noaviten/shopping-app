import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeService } from "./services/theme";
import { BagItemsService } from "./services/BagItems";
import { OrdersService } from "./services/Orders";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
<Router>
  <OrdersService>
    <BagItemsService>
      <ThemeService>
        <App />
      </ThemeService>
    </BagItemsService>
  </OrdersService>
</Router>
, document.getElementById("root")
);