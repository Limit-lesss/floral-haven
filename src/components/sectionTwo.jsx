import React from "react";
import flower from '../assets/Screenshot 2023-09-20 at 2.51.30 AM.png'
export const SectionTwo = () => {
  return (
    <div className="sectionTwo">
      <div className="img-sec">
        <div className="part-one"></div>
        <div className="part-two">
          <img
            src={flower}
          />
        </div>
      </div>
      <div className="about-sec">
        <p>About us</p>
        <h2>The Art Of Floral Expression</h2>
        <p>
          Propelled by our affection for flowers and energy about nature, it is
          our obsession to make creative and noteworthy plant and new flower
          courses of action. We trust that the best, freshest flowers deliver
          the most noteworthy presentations.
        </p>
        <p>
          We owe quite a bit of our prosperity to our extraordinary customers,
          who move us to make unique and dazzling structures. Our master staff
          is here to enable all customers to pick the best flowers and plants
          for all events and purposes
        </p>
        <p>
          To the extent flowers go, we have something for any taste. Orchids,
          lilies, sunflowers, roses, tulips, thus considerably more, can be
          found on our site and, after that, conveyed to the doorstep of a
          companion, relative, friend, or family member of yours.
        </p>
        <button className="btn">Know More</button>
      </div>
    </div>
  );
};
