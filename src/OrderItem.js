import React from "react";

export function OrderItem({order}) {
    return (
        <li> 
            {`Total: ${order.total}$ Date: ${order.date}`}
        </li>
    );
};