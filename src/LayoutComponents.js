import {
  DarkModeOutlined,
  MenuOutlined,
  LightModeOutlined,
  CloseOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { CustomNavLink } from "./CustomHooks";
import "./LayoutComponents.css";

export const Navbar = (props) => {
  
  //Handle navbar cancellation
  const handleNavbarCancel = () => {
    document.getElementById("navbarMenu-list").style.marginLeft = "none";
    window.location.reload();
  };

  //Handle menu display
  const handleMenuDisplay = (e) => {
    e.preventDefault();
    document.getElementById("navbarMenu").style.display = "block";
    document.getElementById("navbarMenuImage").style.display = "none";
  };

  //Create states
  const [darkModeImage, setDarkModeImage] = useState({
    img: <DarkModeOutlined />,
  });
  const [isDarkModeImage, setIsDarkModeImage] = useState(false);
  const handleDarkModeImage = (e) => {
    e.preventDefault();
    setDarkModeImage((prevState) => {
      return {
        ...prevState,
        img: isDarkModeImage ? <DarkModeOutlined /> : <LightModeOutlined />,
      };
    });
    setIsDarkModeImage((prevState) => !prevState);
  };
  return (
    <nav className="navbarFlex-one">
      <div className="navbarFlex-two">
        <a href="https://thealtschool.com/" target="_blank" rel="noreferrer">
          <img
            src="https://thealtschool.com/wp-content/uploads/2022/01/cropped-AltSchool-Logo-1.png"
            alt="logo"
            className="logo"
          />
        </a>
        <span onClick={handleDarkModeImage} onClickCapture={props.toggle}>
          {darkModeImage.img}
        </span>
      </div>
      <MenuOutlined
        className="navbarMenuImage"
        id="navbarMenuImage"
        onClick={handleMenuDisplay}
      />
      <ul className="navbarMenu" id="navbarMenu">
        <li className="navbarMenu-list" id="navbarMenu-list">
          <CloseOutlined
            className="navbarCancel"
            onClick={handleNavbarCancel}
          />
          <CustomNavLink to="/" className="navbarLinks">
            Home
          </CustomNavLink>
          <CustomNavLink to="/about" className="navbarLinks">
            About
          </CustomNavLink>
          <CustomNavLink to="/users" className="navbarLinks">
            Users
          </CustomNavLink>
          <CustomNavLink to="/sign-up" className="navbarLinks">
            Sign up
          </CustomNavLink>
        </li>
      </ul>
    </nav>
  );
};
export const Footer = () => {
  return (
    <div className="footerSocial">
      <div className="footerSocial-flex">
      <a
        href="https://twitter.com/Mike_Adeshina"
        target="_blank"
        rel="noreferrer"
      >
        <img src="twitter--icon.png" alt="img" className="footerSocial-img" />
      </a>
      <a href="https://github.com/michado2019" target="_blank" rel="noreferrer">
        <img src="github--icon.png" alt="img" className="footerSocial-img" />
      </a>
      <a
        href="https://www.linkedin.com/in/michado2019"
        target="_blank"
        rel="noreferrer"
      >
        <img src="linked--in_icon.png" alt="img" className="footerSocial-img" />
      </a>
      </div>
      <footer className="footerCopyright">
        <p className="copyright"> &copy;Michado 2022</p>
      </footer>
    </div>
  );
};
