import React from "react";
import "./style.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "../../assets/svg/bank.png";
import img2 from "../../assets/svg/dsds.png";
import img3 from "../../assets/svg/ss.jpg";
import Sponsors from "../../component/sponsors";

export default function Index() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <Sponsors image={img1} onDragStart={handleDragStart} />,
    <Sponsors image={img2} onDragStart={handleDragStart} />,
    <Sponsors image={img3} onDragStart={handleDragStart} />,
    // <img src={img1} onDragStart={handleDragStart} />,
    // <img src={img2} onDragStart={handleDragStart} />,
    // <img src={img3} onDragStart={handleDragStart} />,
  ];
  const responsive = {
    0: { items: 1 },
    500: { items: 2 },
    680: { items: 4 },
    960: { items: 4 },
    1280: { items: 4 },
    1920: { items: 5 },
  };

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      // autoPlay={true}
      autoPlayInterval={1000}
      // autoPlayStrategy="all"
      infinite={true}
      // disableDotsControls={true}
      // disableButtonsControls={true}
      responsive={responsive}
      swipeDelta={0}
    ></AliceCarousel>
  );
}
