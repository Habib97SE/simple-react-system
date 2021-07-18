import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import TextField from "./components/Forms/TextField";
import Select from './components/Forms/Select';

function App() {
  let options = ["Volvo", "Apple"]
  let navItems = [
    { hasSubMenu: false, link: "https://www.google.com", text: "Item 1" },
    { hasSubMenu: false, link: "https://www.bing.com", text: "Item 2" },
    {
      hasSubMenu: true,
      text: "SubMenu Item",
      subMenuItems: [
        { link: "https://www.facebook.com", text: "Facebook" },
        { link: "https://www.twitter.com", text: "Twitter" },
      ],
    },
    { hasSubMenu: false, link: "https://www.google.com", text: "Item 3" },
    { hasSubMenu: false, link: "https://www.bing.com", text: "Item 4" },
    { hasSubMenu: false, link: "https://www.google.com", text: "Item 5" },
    { hasSubMenu: false, link: "https://www.bing.com", text: "Item 6" },
  ];
  return (
    <>
      <Navigation items={navItems} cssClass="btn btn-secondary" />

      <TextField type="text" placeholder="Search" />
      <hr />
      <Select name="cars" options={options} />
    </>
  );
}
export default App;
