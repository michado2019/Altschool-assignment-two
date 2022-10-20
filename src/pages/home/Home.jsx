import React, { useRef } from "react";
import {Link} from 'react-router-dom'
import "./Home.css";

export default function Home() {
  const [welcome, setWelcome] = React.useState(
    "Hi, I am a student of Altschool Africa. Welcome to my site!"
  );
  const welcomeRef = useRef(null);

  setTimeout(() => {
    welcomeRef.current =
      'To view users list, click on the link in the "Users" list box below!';
    const welcomeAddress = welcomeRef.current;
    setWelcome(welcomeAddress);
  }, 3000);
  return (
    <div className="homeWrapper">
      <div className="homeWecome-address_div">
        <h3 className="homeWecome-address">{welcome}</h3>
      </div>
      <div className="homepageBox-image_flex">
        <div className="homepageBox-image_one">
          <a href="https://thealtschool.com/" target="_blank" rel="noreferrer">
            <h2 className="homepageBox-image_text">Altschool Homepage</h2>
          </a>
        </div>
        <div className="homepageBox-image_two">
          <a href="https://thealtschool.com/software-engineering/" target="_blank" rel="noreferrer">
            <h2 className="homepageBox-image_text">Altschool Online Courses</h2>
          </a>
        </div>
        <div className="homepageBox-image_three">
          <Link to='users'>
          <h2 className="homepageBox-image_text">Users List</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}