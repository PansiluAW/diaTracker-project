import React from "react";
import "./navBar.css";
import diatraclogo from "./diatraclogo.png";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <div class="logo">
          <img src={diatraclogo} alt="Diatrac logo" />
        </div>

        <ul>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="">About Us</a>
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
