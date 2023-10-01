import React, { useEffect, useState } from "react";
import FlowerIcon from "../assets/flower-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const NavMenu = () => {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebase.FirebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <nav className="nav">
      <div className="icon">
        <img src={FlowerIcon} />
        <span>Floral Haven</span>
      </div>
      <div className="menu-section">
        <ul className="menu">
          <li>Home</li>
          <li>Shop</li>
          <li className="product">
            Product
            <FontAwesomeIcon
              icon="fa-solid fa-angle-down"
              className="angel-down"
            />
            <div className="drop-down">
              <p>Name</p>
              <p>Name</p>
              <p>Name</p>
              <p>Name</p>
            </div>
          </li>
          <li>Blog</li>
          <li className="page">
            Pages
            <FontAwesomeIcon
              icon="fa-solid fa-angle-down"
              className="angel-down"
            />
            <div className="drop-down">
              <p>Name</p>
              <p>Name</p>
              <p>Name</p>
              <p>Name</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="search-cart_etc-section">
        <FontAwesomeIcon
          icon="fa-solid fa-magnifying-glass"
          className="search-icon"
        />

        {firebase.isLogin ? (
          <span
            style={{ cursor: "pointer", transition: "all 2s" }}
            onClick={() => {
              signOut(firebase.FirebaseAuth);
              navigate("/SignIn-SignUp");
            }}
          >
            <FontAwesomeIcon
              icon="fa-regular fa-user"
              className="profile-icon"
            />
            <span className="login-btn">Logout</span>
          </span>
        ) : (
          <span
            style={{ cursor: "pointer", transition: "all 2s" }}
            onClick={() => navigate("/SignIn-SignUp")}
          >
            <FontAwesomeIcon
              icon="fa-regular fa-user"
              className="profile-icon"
            />
            <span className="login-btn">Sign-in/Sign-up</span>
          </span>
        )}

        <FontAwesomeIcon icon="fa-regular fa-heart" className="wishlist-icon" />
        {/* <span>2</span> */}
        <FontAwesomeIcon
          icon="fa-solid fa-cart-shopping"
          className="cart-icon"
        />
        {/* <span>2</span> */}
      </div>
    </nav>
  );
};

