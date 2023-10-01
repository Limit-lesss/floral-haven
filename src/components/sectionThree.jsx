import React from 'react';
import flowerONe from '../assets/Screenshot 2023-09-20 at 4.21.45 AM.png'
import flowerTwo from '../assets/Screenshot 2023-09-20 at 4.21.31 AM.png'
import flowerThree from '../assets/Screenshot 2023-09-20 at 4.22.03 AM.png'
import flowerFour from '../assets/Screenshot 2023-09-20 at 4.22.14 AM.png'

export const SectionThree = () => {
    return(
        <div className="sectionThree">
            <h2>Featured Categories</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                cupiditate modi minima ea voluptas aspernatur?
            </p>
            <div className="flower-details">
                <div className="sectionThree-card">
                    <img src={flowerONe} alt="" />
                    <div>
                        <h3>Rose Bouquet White</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <button>Details</button>
                    </div>
                </div>
                <div className="sectionThree-card">
                    <img src={flowerTwo} alt="" />
                    <div>
                        <h3>Orchid Flower Red Stick</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <button>Details</button>
                    </div>
                </div>
                <div className="sectionThree-card">
                    <img src={flowerThree} alt="" />
                    <div>
                        <h3>Jack in the Pulpit</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <button>Details</button>
                    </div>
                </div>
                <div className="sectionThree-card">
                    <img src={flowerFour} alt="" />
                    <div>
                        <h3>Rose Bouquet White</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <button>Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
}