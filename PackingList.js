import React from "react";
import Item from "./Item";

export default function PackingList({
  initialItems,
  handleChange,
  deleteItem,
}) {
  const packingList = initialItems.map((obj) => (
    <Item
      obj={obj}
      key={obj.id}
      handleChange={handleChange}
      deleteItem={deleteItem}
    />
  ));

  return (
    <div className="list">
      <ul>{packingList}</ul>
    </div>
  );
}
