import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My Page</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
