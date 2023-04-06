import React from "react";
import "./App.css";
// const imageLink = 'https://v1.tailwindcss.com/img/card-top.jpg'
const App = () => {
  return (
    <div className="page-wrapper">
      <div className="card-component">
        <img
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt=""
          className="card-image"
        />
        <div className="card-content">
          <h1>The Coldest Sunset</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            impedit accusantium sequi consequatur? Totam, distinctio accusantium
            possimus vitae, molestiae laudantium iure natus odio dignissimos,
            autem voluptatem sequi explicabo porro tempore.
          </p>
          <div className="tags">
            <span className="tag">#photography</span>
            <span className="tag">#travel</span>
            <span className="tag">#winter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
