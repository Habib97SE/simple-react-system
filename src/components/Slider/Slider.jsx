import React from "react";
import { Carousel } from "react-bootstrap";

export default function Slider(props) {
  return (
    <Carousel>
      {props.data.map((value, index) => (
        <Carousel.Item>
          <img className="d-block w-100" src={value.src} alt="First slide" />
          <Carousel.Caption>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

/*

*/
