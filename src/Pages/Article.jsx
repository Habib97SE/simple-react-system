import React from "react";

export default function Article(props) {
  return (
    <div className="article">
      <img
        src="https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        className="article-img"
      />
      <h1>This is breaking news.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam facere
        assumenda, corporis eligendi possimus voluptatem asperiores sint at ab
        dolorum quos mollitia in eum deserunt enim doloribus rerum sunt
        aspernatur.
      </p>
      <footer>
        <div className="left">author: Habiballah Hezarehee</div>
        <div className="right">Read More</div>
      </footer>
    </div>
  );
}
