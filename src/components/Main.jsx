import React from "react";
import { Image } from "react-bootstrap";

export default function Main(props) {
  return (
    <>
      <div className="main">
        <article className="article">
          <Image
            src="https://www.edwardbeaman.com/wp-content/uploads/2017/12/The-Copywriters-Cat-Featured-Image-1.jpg"
            fluid
          />
          <h1>Hello world</h1>
          <p>This is justa a paragraph</p>
        </article>
      </div>
    </>
  );
}
