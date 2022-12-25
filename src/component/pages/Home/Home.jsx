import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Footers from "../Footers";
import Navbar from "../Navbar";
import Products from "../Products";


function UncontrolledExample() {
  return (
    <div className="Hero">
    <Navbar/>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="/assets/1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="/assets/2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="/assets/3.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="/assets/4.jpg"
          alt="Forty slide"
        />
        
      </Carousel.Item>
    </Carousel>
   <Products/>
   <Footers/>
   
    
  </div>

  );
};
export default UncontrolledExample;





