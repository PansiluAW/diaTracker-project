import React from "react";
import "./navBar.css";
import diatraclogo from "./diatraclogo.png";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "../../Pages/About/About.js";
// import HomeScreen from "../../Pages/HomeScreen/HomeScreen";
// import About from "./FrontEnd_DiaTracker/About.html";
// import LogOut from "./BackEnd_DiaTracker/DatabaseComponent/php-firebase/logout.php";

export default function NavBar() {
  return (
    <>
      {/* <div class="navbar">
          <Route path="/" component={HomeScreen} />
          <Route path="/FrontEnd_DiaTracker/About.html" component={About} />
        </div> */}

      <nav>
        <div class="logo">
          <img src={diatraclogo} alt="Diatrac logo" />
        </div>

        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {/* <li>
          <Route path="/Pages/About/About.js" component={About} />
          </li> */}
          <li>
            <a href="">
              About Us
            </a>
          </li>
          <li>
            <a href="http://localhost/diaTracker-project/BackEnd_DiaTracker/DatabaseComponent/php-firebase/logout.php">
              Log Out
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
