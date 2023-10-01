import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FirstSlider } from "./slider/firstSlider";
import { SecondSlider } from "./slider/secondSlider";
import { ThirdSlider } from "./slider/thirdSlider";

export const SectionFive = () => {
  return (
    <div className="sectionFive">
    <Carousel>
      <Carousel.Item>
        <FirstSlider />
      </Carousel.Item>
      <Carousel.Item>
        <SecondSlider />
      </Carousel.Item>
      <Carousel.Item>
        <ThirdSlider />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};