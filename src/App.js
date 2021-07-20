import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import TextField from "./components/Forms/TextField";
import Select from "./components/Forms/Select";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`submitting the: ${name}`);
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="flex-item">
            <nav>
              <ul>
                <li>Logo</li>
                <li>
                  <a href="https://google.com">Google</a>
                </li>
                <li>
                  <a href="https://google.com">Google</a>
                </li>
                <li>
                  <a href="https://google.com">Google</a>
                </li>
                <li>
                  <a href="https://google.com">Google</a>
                </li>
                <li>
                  <a href="https://google.com">Google</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex-item">
            <input type="text" placeholder="Search ..." />
          </div>
        </div>
      </header>
      <section>Section</section>
      <footer>Footer</footer>
    </>
  );
}
export default App;
