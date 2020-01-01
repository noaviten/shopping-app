import React from "react";
import { BagItem } from "./BagItem";

export function BagList({ bagItems, onDelete }) {
  return (
    <ul>
      {bagItems.map(item => (
        <BagItem
          key={item.id}
          bagItem={item}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
