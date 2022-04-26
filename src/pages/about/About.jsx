import React from "react";
import "./about.css";
import image1 from "./images/pic1.jpg";
import image2 from "./images/pic2.jpg";
import image3 from "./images/pic3.jpg";
import image4 from "./images/pic4.jpg";
import image5 from "./images/pic5.jpg";

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>About Us</h1>
        <div className="grid-flex">
          <div className="col-image">
            <img src={image1} alt="img1" />
          </div>
          <div className="col-text">
            <p>
              79Chops is a proudly African company that works in the hospitality
              industry in the region.
            </p>
          </div>
        </div>

        <div className="grid-flex">
          <div className="col-image">
            <img src={image2} alt="img2" />
          </div>
          <div className="col-text">
            <p>The brand operates through several stores in Africa.</p>
          </div>
        </div>

        <div className="grid-flex">
          <div className="col-image">
            <img src={image3} alt="img3" />
          </div>
          <div className="col-text">
            <p>
              We're your go to place for fine dining and unique experiences{" "}
            </p>
          </div>
        </div>

        <div className="grid-flex">
          <div className="col-image">
            <img src={image4} alt="img4" />
          </div>
          <div className="col-text">
            <p>
              Our mission is to be the most sought-after experience in
              indiginous cuisine.{" "}
            </p>
          </div>
        </div>

        <div className="grid-flex">
          <div className="col-image">
            <img src={image5} alt="img5" />
          </div>
          <div className="col-text">
            <p>
              Our fundamental principles are INNOVATION, QUALITY, UNPARALLELED
              AMBIENCE, and CONSISTENCY.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
