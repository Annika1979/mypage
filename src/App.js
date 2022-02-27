import { Outlet, Link } from "react-router-dom";
import "./App.css";
import Annika from "./img/Annika2png.png";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/home" className="link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contacts" className="link">
                Contacts
              </Link>
            </li>
            <li className="nav__item">
              {" "}
              <Link to="/blog" className="link">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* introduction */}
      <section className="intro" id="home">
        <h1 className="section__title section__title-intro">
          Hi, I am <br />
          <strong>Annika Hägglund</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          multitasker
        </p>
        <img
          className="annikapic"
          src={Annika}
          alt="picture of Annika in her own creation"
        ></img>
      </section>
      {/* My services */}

      {/* About me  */}

      <Outlet />
    </div>
  );
}

export default App;
