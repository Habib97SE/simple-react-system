import React from "react";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  let navItem = [
    {
      link: "/home",
      text: "Home",
    },
    {
      link: "/about-us",
      text: "About us",
    },
    {
      link: "/contact-us",
      text: "Contact us",
    },
    {
      link: "/services",
      text: "Services",
    },
  ];
  return (
    <>
      <header>
        <Header navItem={navItem} />
      </header>
      <section>
        <Main />
      </section>
    </>
  );
}

export default App;
