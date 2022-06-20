import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img src={img + "?grayscale"} />
    <img
      className="flower"
      src="https://cdn.pixabay.com/photo/2022/05/17/15/49/flower-7203048_960_720.jpg"
    />
    <img
      className="flower"
      src="https://cdn.pixabay.com/photo/2021/09/13/08/13/dahlia-6620610_960_720.jpg"
    />
    <img
      className="flower"
      src="https://cdn.pixabay.com/photo/2022/04/22/14/14/leaves-7149850_960_720.jpg"
    />
  </div>,
  document.getElementById("root")
);
