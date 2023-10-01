import React from 'react';
import flowerONe from '../assets/Screenshot 2023-09-20 at 4.21.45 AM.png'
import flowerTwo from '../assets/Screenshot 2023-09-20 at 4.21.31 AM.png'
import flowerThree from '../assets/Screenshot 2023-09-20 at 4.22.14 AM.png'


export const SectionFour = () => {
    return(
        <div className="sectionFour">
            <h2 className="deal-heading">Deal of the day</h2>
            <p className="deal-details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                molestias.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Labore, molestias
            </p>
            <div className="deal-deadline">
                <div>
                    <p>56</p>
                    <p>Days</p>
                </div>
                <div>
                    <p>14</p>
                    <p>Hours</p>
                </div>
                <div>
                    <p>8</p>
                    <p>Mins</p>
                </div>
                <div>
                    <p>6</p>
                    <p>Sec</p>
                </div>
            </div>
            <div className="flower-offer">
                <div className="sectionFour-card">
                    <div>
                        <h3>Rose Bouquet</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className="price">$80.00 <span>$100.00</span></p>
                        <button>Buy now</button>
                    </div>
                    <div>
                        <img src={flowerONe} alt="" />
                    </div>
                </div>
                <div className="sectionFour-card">
                    <div>
                        <h3>Orchid Flower</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className="price">$80.00 <span>$100.00</span></p>
                        <button>Buy now</button>
                    </div>
                    <div>
                        <img src={flowerTwo} alt="" />
                    </div>
                </div>
                <div className="sectionFour-card">
                    <div>
                        <h3>Rose Bouquet</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className="price">$80.00 <span>$100.00</span></p>
                        <button>Buy now</button>
                    </div>
                    <div>
                        <img src={flowerThree} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}