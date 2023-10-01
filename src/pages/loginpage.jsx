import React, { useEffect } from "react";
import flower from "../assets/flower-icon.png";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";
import flowerShop from "../assets/loginPage-background-2.png"

export const LoginPage = () => {
  const navigate = useNavigate();
  const firebase = useFirebase();
  return (
    <div className="login-page">
      <div className="section-1">
        <nav>
          <span onClick={() => navigate('/floral-haven')}>
          <img src={flower}/>
          <h2 >Floral Haven</h2>
          </span>
        </nav>
        <div className="sign-in-section">
          <h3>Let's Get Started!</h3>
          <p>Please fill the below details to login your account.</p>
          <button className="google-btn" onClick={() => firebase.signUPWithGoogle()}>
            <img src={google} />
            Google
          </button>
          <p className="or-option">Or with</p>
          <div className="email-div">
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email ID"
            />
          </div>
          <div className="password-div">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="rememberMe-forgotPassword-section">
            <div className="remember-me-div">
              <div class="checkbox-wrapper-23">
                <input type="checkbox" id="check-23" />
                <label for="check-23">
                  <svg viewBox="0,0,50,50">
                    <path d="M5 30 L 20 45 L 45 5"></path>
                  </svg>
                </label>
              </div>
              <label htmlFor="check-23">Remember me</label>
            </div>
            <div className="Forgot-password-div">
              <a href="">Forgot Password?</a>
            </div>
          </div>
          <button className="login-btn">Login</button>
          <div className="sign-up-div">
            <p>Don't Have An Account?</p>
            <a href="">Sign Up</a>
          </div>
        </div>
      </div>
      <div className="section-2">
       <img src={flowerShop} alt="" />
      </div>
    </div>
  );
};
