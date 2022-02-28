import { useState } from "react";

const Comments = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const addItem = (event) => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: items.length,
        name: itemName,
      },
    ]);
    setItemName("");
  };

  return (
    <>
      <div>
        <h3>Write your comments here</h3>
      </div>
      <form onSubmit={addItem}>
        <label>
          <input
            name="item"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="write your comments"
          />
          then press enter
        </label>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Comments;
