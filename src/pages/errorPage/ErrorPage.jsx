import React from "react";
import './ErrorPage.css'

export default function ErrorPage() {
  return <div className="errorPage-wrapper">
    <h1 className="errorPage-title">Error 404</h1>
    <p className='errorPage-details'>Page not found!</p>
  </div>;
}
