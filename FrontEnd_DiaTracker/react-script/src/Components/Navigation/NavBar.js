import React from 'react'
import './navBar.css'
import diatraclogo from "./diatraclogo.png";

export default function NavBar() {
    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
      
        loader.classList.add("loader--hidden");
      
        loader.addEventListener("transitionend", () => {
          document.body.removeChild(loader);
        });
      });
  return (
    <>
        {/* <div class = "loader"></div> */}
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