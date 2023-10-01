import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import flower from '../assets/flower-icon.png'
export const SectionSeven = () => {
    return(
        <div className="sectionSeven">
            <div id="top">
                <div className="address">
                    <img src={flower} />
                    <h2>Floral Haven</h2>
                    <p>South Delhi, Road no. 15, Krishna Kunj Apartment, 100003,
                        New Delhi, India </p>
                        <FontAwesomeIcon icon="fa-brands fa-square-facebook" size='2xl' style={{color: "#3aa0daeb",margin:"5px 8px 0px 0px"}} />
                        <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" size='2xl' style={{color: "rgb(187 199 236)",margin:"5px 8px 0px 0px"}} />
                        <FontAwesomeIcon icon="fa-brands fa-square-instagram" size='2xl' style={{color: "#E1306C",margin:"5px 8px 0px 0px"}} />
                </div>
                <div className="company">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Features</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="contact">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>+01-23434-3232</li>
                        <li>www.genius.com</li>
                        <li>genius@gmail.com</li>
                    </ul>
                </div>
                <div className="update">
                    <h2>Get the latest information from us</h2>
                    <div>
                        <input type="email" placeholder="Enter Your Email"/>
                        <button>Send</button>
                    </div>
                </div>
            </div>
            <div id="bottom">
                <p className="copy-right">Copyright &copy;2023 Floral Haven. All Rights Reserved.</p>
                <p className="terms">Terms & Conditions <span>Privacy</span><span>Policy</span></p>
            </div>
        </div>
    );
}