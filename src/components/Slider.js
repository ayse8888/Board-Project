import React from "react";
import { Carousel } from "react-bootstrap";

import edsheeran from "../images/ed-sheeran-guitars.jpg";
import theweekend from "../images/theweekend.jpg";
import billieeilish from "../images/billieeilish.jpg";

const Slider = () => {

    const sliderStyle = {
        height:"700px",
        margin: "auto",
        objectFit: "cover",
        backgroundSize: "cover"
    };

    return (
        
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={sliderStyle}

      src={edsheeran}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={sliderStyle}
      src={theweekend}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={sliderStyle}

      src={billieeilish}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>

    );
};





export default Slider;
