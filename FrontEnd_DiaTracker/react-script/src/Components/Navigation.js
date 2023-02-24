import React from 'react'
import './navigation.css'
import diatraclogo from "./diatraclogo.png";

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

export default function Navigation() {
  return (
    <>
        <div class = "loader"></div>
        <div class = "navbar">
            <nav>
                <div class = "logo">
                    <img src = {diatraclogo} alt = "Diatrac logo" />
                </div>
                <ul>
                    <li><a href = "#">Home</a></li>
                    <li><a href =" #">Dashboard</a></li>
                    <li><a href = "#">Contact</a></li>
                    <li><a href = "#">Log In</a></li>
                </ul>
            </nav>
        </div>
    </>
  )
}
