import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // kopplar på sig på url i webläsare. ser till att vi kan hålla koll på vilken url vi är på
import "./index.css";
import App from "./App";
import Home from "./routes/Home";
import About from "./routes/About";
import Contacts from "./routes/Contacts";
import Comments from "./routes/Comments";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/comments" element={<Comments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
