import React from "react";
import { noop } from "./appLayout";

export function BagItem({bagItem, onDelete = noop}) {
    return (
        <li onDoubleClick={ () => { onDelete(bagItem.id) } }> 
            {`${bagItem.name}  Amount: ${bagItem.amount}    Price: ${bagItem.price} $`}
        </li>
    );
};