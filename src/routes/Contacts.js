import { useState } from "react";
const Contacts = () => {
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
    <div className="contacts">
      <section className="my--contacts">
        <div className="contacts--header">
          <h2 className="contacts-h2">Let me know you visited my page</h2>
          <h3>Leave your name here</h3>
        </div>
        <form onSubmit={addItem}>
          <label>
            <input
              className="contacts--input"
              name="item"
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Write your name"
            />
            then press enter
          </label>
        </form>
        <ul className="contacts-list">
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Contacts;
