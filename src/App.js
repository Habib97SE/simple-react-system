import React from "react";
import "./App.css";
import "./style.css";
import Login from "./Pages/Login";
import Text from "./components/Text/Text";
import Signup from "./Pages/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Home from './Pages/Home';

function App() {

  let navItems = [
    { hasSubMenu: false, link: "/Signup", text: "Signup"
    },
    { hasSubMenu: false, link: "Login", text: "Login"
    },
    { hasSubMenu: false, link: "/", text: "Home"
    },
  ]

  return (
    <>
      <Router>
        <nav className="navbar">
        <ul>
        <li className="subnav btn btn-primary">
            <Link to="/">Home</Link>
          </li>
          <li className="subnav btn btn-primary">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="subnav btn btn-primary">
            <Link to="/login">Login</Link>
          </li>
        </ul>
        </nav>
          
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
