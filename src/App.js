import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Button from "./components/Button/Button";
import TextField from "./components/Forms/TextField";

function App() {
  let navItems = [
    { hasSubMenu: false, link: "https://www.google.com", text: "Item 1" },
    { hasSubMenu: false, link: "https://www.bing.com", text: "Item 2" },
    { hasSubMenu: false, link: "https://www.google.com", text: "Item 3" },
    { hasSubMenu: false, link: "https://www.bing.com", text: "Item 4" },
    { hasSubMenu: false, link: "https://www.google.com", text: "Item 5" },
    { hasSubMenu: false, link: "https://www.bing.com", text: "Item 6" },
    {
      hasSubMenu: true,
      text: "SubMenu Item",
      subMenuItems: [
        { link: "https://www.facebook.com", text: "Facebook" },
        { link: "https://www.twitter.com", text: "Twitter" },
      ],
    },
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
