import React from "react";
import Navigation from "./Navigation/Navigation";
import { Navbar, Button } from "react-bootstrap";
import Slider from "./Slider/Slider";

export default function Header(props) {
  let images = [
    {
      src: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Hello world",
      description: "This is just a paragraph",
    },
    {
      src: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Hello world1",
      description: "This is just a paragraph1",
    },
  ];

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navigation nav={props.navItem} />
        <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
        <div className="right">
          <Button variant="success">Get Started</Button>
          <Button variant="outline-success">
            <i class="fas fa-sign-in-alt"></i> Sign in
          </Button>
        </div>
      </Navbar>
      <div className="head-img">
        <Slider data={images} />
      </div>
    </>
  );
}
