import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="aboutWrapper">
      <h2 className="aboutTitle">About</h2>
      <h3 className="aboutDescription">
        This app is built to showcase all of these features:
      </h3>
      <p className="aboutDetails">
        Setup react-router, implement Nested routes, 404 page, and Error
        boundary. Set up client-side pagination using randomuser.me API in one
        of your routes called Users - you should show the prev, next, and
        navigation to individual pages 1, 2, 3, 4, 5 etc. Implement
        accessibility and disabled state and API loading states.
      </p>
    </div>
  );
}
