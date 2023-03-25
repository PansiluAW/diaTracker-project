import React from "react";
import "./navBar.css";
import diatraclogo from "./diatraclogo.png";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomeScreen from "../../Pages/HomeScreen/HomeScreen";
// import About from "./FrontEnd_DiaTracker/About.html";
// import LogOut from "./BackEnd_DiaTracker/DatabaseComponent/php-firebase/logout.php";

export default function NavBar() {
  return (
    <>
{/* 
        <div class="navbar">
          <Route path="/" component={HomeScreen} />
          <Route path="/FrontEnd_DiaTracker/About.html" component={About} />
          <Route path="/BackEnd_DiaTracker/DatabaseComponent/php-firebase/logout.php" component={LogOut} />
        </div> */}

      <nav>
        <div class="logo">
          <img src={diatraclogo} alt="Diatrac logo" />
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/FrontEnd_DiaTracker/About.html">About</Link>
          </li>
          <li>
            <Link to="/BackEnd_DiaTracker/DatabaseComponent/php-firebase/logout.php">
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
