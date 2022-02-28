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
    <div className="commentary">
      <section className="my--commentary">
        <div className="commentary--header">
          <h2>Leave your comments here</h2>
        </div>
        <form onSubmit={addItem}>
          <label>
            <input
              name="item"
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="speak your mind"
            />
            then press enter
          </label>
        </form>
        <ul className="commentary-list">
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Comments;
