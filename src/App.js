import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Button from "./components/Button/Button";
import TextField from "./components/Forms/TextField";

function App() {
  let navItems = [
    { link: "https://www.google.com", text: "Item 1" },
    { link: "https://www.bing.com", text: "Item 2" },
    { link: "https://www.google.com", text: "Item 3" },
    { link: "https://www.bing.com", text: "Item 4" },
    { link: "https://www.google.com", text: "Item 5" },
    { link: "https://www.bing.com", text: "Item 6" },
  ];
  return (
    <>
      <Navigation items={navItems} cssClass="btn btn-secondary" />

      <TextField type="text" placeholder="Search" />

      <hr />
    </>
  );
}
export default App;
