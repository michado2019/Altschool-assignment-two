import React, { useRef } from "react";
import "./Home.css";

export default function Home() {
  const [welcome, setWelcome] = React.useState("Hi, I am a student of Altschool Africa. Welcome to my site!");
  const welcomeRef = useRef(null)

  setTimeout(() => {
    welcomeRef.current = 'To view users list, click on the "Users" list box below!';
    const welcomeAddress = welcomeRef.current;
    setWelcome(welcomeAddress);
  }, 3000)
  return (
    <div className="homeWrapper">
      <div className="homeWecome-address_div">
        <h3 className="homeWecome-address">
          {welcome}
        </h3>
      </div>
    </div>
  );
}
