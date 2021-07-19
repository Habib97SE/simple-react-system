import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import TextField from "./components/Forms/TextField";
import Select from "./components/Forms/Select";

function App() {
  const [name, setName] = useState("");
  let options = ["MSFT", "AAPL", "TSLA", "SQ"];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`submitting the: ${name}`);
  };
  return (
    <>
      <Navigation items={navItems} cssClass="btn btn-secondary" />
      {/* Form */}
      <form method="Post" onSubmit={handleSubmit}>
        <TextField label="Name:" type="text" />
        <Select label="Company:" name="cars" options={options} />
        <input type="submit" className="btn btn-primary" />
      </form>
    </>
  );
}
export default App;
