import React from 'react';
import flowerOne from '../assets/flower-articles1.jpg'
import flowerTwo from '../assets/flower-articles2.webp'
import flowerThree from '../assets/flower-article3.avif'

export const SectionSix = () => {
    return(
        <div className="sectionSix">
            <h2>Latest News & Articles</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                cupiditate modi minima ea voluptas aspernatur?
            </p>
            <div className="card-section">
                <div className="card " >
                    <img src={flowerOne} />
                    <div className="card-body">
                        <p>August 11, 2023 <span>Grooming</span></p>
                        <h3>Lorem ipsum dolor sit amet consect adipisicing elit. Consequuntur, cupiditate.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem fuga similique accusamus doloribus, ab magni?</p>
                        <a href="">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <img src={flowerTwo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p>August 11, 2023 <span>Grooming</span></p>
                        <h3>Lorem ipsum dolor sit amet consect adipisicing elit. Consequuntur, cupiditate.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem fuga similique accusamus doloribus, ab magni?</p>
                        <a href="">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <img src={flowerThree} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p>August 11, 2023 <span>Grooming</span></p>
                        <h3>Lorem ipsum dolor sit amet consect adipisicing elit. Consequuntur, cupiditate.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem fuga similique accusamus doloribus, ab magni?</p>
                        <a href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}