import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My Page</h1>
      <nav className="navigation">
        <Link to="/home" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/contacts" className="link">
          Contacts
        </Link>
        <Link to="/blog" className="link">
          Blog
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
