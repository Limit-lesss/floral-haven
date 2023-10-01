import React from 'react';
import flower from '../assets/sectionOneFlower.png'
export const SectionOne = () => {
    return (
        <div className="sectionOne">
            <img src={flower}  id='sectionOneFlower'/>
            <div>
                
                <p>Hot Flower</p>
                <h2>Fresh Flowers For Any Occasion</h2>
                <p>
                    You&apos;re only here for a short visit. Don&apos;t hurry,
                    don&apos;t worry. And be sure to smell the flowers along the way.
                </p>
                <button className="button-36" role="button">Start shopping</button>
            </div>
        </div>
    );
}