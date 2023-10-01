import React from "react";
import clientImg from "../../assets/kiara-advani.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SecondSlider = () => {
  return (
    <div className="slider">
      {/* <div className="slide-show">
        <FontAwesomeIcon icon="fa-solid fa-angle-left" className="slide" />
        <FontAwesomeIcon icon="fa-solid fa-angle-right" className="slide" />
      </div> */}
      <div className="clients">
        <p>We love our Clients</p>
        <h2>What Our Client Say</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem nobis
          ea accusamus consequatur rerum blanditiis beatae quis iure unde
          officiis officia accusantium vitae iusto enim, animi velit maxime modi
          cupiditate! Laudantium veritatis quod animi illum blanditiis velit!
          Quas quam maxime nesciunt. Maiores consequuntur, veritatis eius ipsam
          aliquid harum distinctio quaerat!.
        </p>
      </div>
      <div className="clients-info">
        <div className="client-img-2">
          <img src={clientImg} alt="" />
        </div>
        <div className="client-detail-2 client-detail">
          <h2>Kiara Advani</h2>
          <p>Actress</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            in voluptatum quae harum, maxime consequuntur dolores atque et
            mollitia natus.
          </p>
        </div>
      </div>
    </div>
  );
};
