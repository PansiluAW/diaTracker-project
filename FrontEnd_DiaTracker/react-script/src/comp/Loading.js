import React from 'react'

export default function Loading() {

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

//   window.addEventListener("head-btn")
  return (
    <>
      <header>
        <div class="navbar">
          <nav>
            <div class = "logo">
              <img src = ".\Images\diatraclogo.png" alt = "diatraclogo"/>
            </div>
            <ul>
              <li><a href = "#">Home</a></li>
              <li><a href = "#">Dashboard</a></li>
              <li><a href = "#">Contact</a></li>
              <li><a href = "#">Log In</a></li>

            </ul>
          </nav>
        </div>

        <div class = "head">
          <div class = "head-img">
            <img src = ".\Images\DrawKit Vector Illustration Health & Medical (3).png" alt = "DrawKit Vector Illustration Health & Medical"/>
          </div>
          <div class = "head-text">
            <h1>One stop for all your diabetic needs</h1>
            <p>DiaTracker is built with the sole purpose of providing functionalities for
              the ease of diabetes patients in managing diabetes with one single app </p> 
          </div>
          <div class = "head-btn">
            <a href = "Index.jsx">Get started</a>
          </div>
        </div>


      </header>
    </> 
  )
}